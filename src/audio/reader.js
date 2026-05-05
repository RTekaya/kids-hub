// Web Speech API wrapper qui lit une histoire paragraphe par paragraphe.
// Utilise un seul moteur global (window.speechSynthesis) — donc on coupe
// toute lecture en cours quand on en démarre une nouvelle.

const isSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

// Strip emoji + (en mode FR) blocs de caractères arabes embarqués dans le texte
// (ex : "عليه السلام") qui ne se prononcent pas correctement avec une voix FR.
const ARABIC_BLOCK = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+/g;
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F0FF}]/gu;

const cleanText = (text, lang) => {
  let out = text;
  if (lang === 'fr') out = out.replace(ARABIC_BLOCK, '');
  out = out.replace(EMOJI, '');
  out = out.replace(/\s+/g, ' ').trim();
  return out;
};

const pickVoice = (lang) => {
  if (!isSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  const prefix = lang === 'ar' ? 'ar' : 'fr';
  const matches = voices.filter((v) => v.lang.toLowerCase().startsWith(prefix));
  if (matches.length === 0) return null;
  // Préférer une voix par défaut, sinon la première
  return matches.find((v) => v.default) || matches[0];
};

export const cancelAllSpeech = () => {
  if (!isSupported()) return;
  try { window.speechSynthesis.cancel(); } catch (_) { /* noop */ }
};

export class StoryReader {
  constructor(paragraphs, lang) {
    this.paragraphs = paragraphs;
    this.lang = lang;
    this.idx = 0;
    this.state = 'idle'; // 'idle' | 'playing' | 'paused'
    this.utter = null;
    this.onChange = null;
    this.cancelled = false;
  }

  notify() {
    this.onChange?.({ state: this.state, idx: this.idx });
  }

  speakCurrent() {
    if (!isSupported()) return;
    if (this.cancelled) return;
    if (this.idx >= this.paragraphs.length) {
      this.state = 'idle';
      this.idx = 0;
      this.notify();
      return;
    }
    const text = cleanText(this.paragraphs[this.idx], this.lang);
    if (!text) {
      this.idx += 1;
      this.speakCurrent();
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = this.lang === 'ar' ? 'ar-SA' : 'fr-FR';
    u.rate = 0.95;
    u.pitch = 1.05;
    const voice = pickVoice(this.lang);
    if (voice) u.voice = voice;
    u.onend = () => {
      if (this.cancelled) return;
      if (this.state !== 'playing') return; // paused/stopped
      this.idx += 1;
      this.notify();
      this.speakCurrent();
    };
    u.onerror = () => {
      // Browser may fire 'interrupted' when we cancel — ignore.
    };
    this.utter = u;
    window.speechSynthesis.speak(u);
  }

  // Démarrage : si idx donné, on saute à ce paragraphe.
  play(fromIdx = null) {
    if (!isSupported()) return;
    if (this.state === 'paused' && fromIdx === null) {
      window.speechSynthesis.resume();
      this.state = 'playing';
      this.notify();
      return;
    }
    cancelAllSpeech();
    this.cancelled = false;
    if (fromIdx !== null) this.idx = Math.max(0, Math.min(fromIdx, this.paragraphs.length - 1));
    this.state = 'playing';
    this.notify();
    // Petit délai pour laisser le cancel précédent finir, sinon Chrome peut sauter le 1er utterance.
    setTimeout(() => this.speakCurrent(), 60);
  }

  pause() {
    if (!isSupported() || this.state !== 'playing') return;
    window.speechSynthesis.pause();
    this.state = 'paused';
    this.notify();
  }

  stop() {
    this.cancelled = true;
    cancelAllSpeech();
    this.state = 'idle';
    this.idx = 0;
    this.notify();
  }
}

export const ttsSupported = isSupported;

// Précharger la liste des voix dès que possible (Chrome la peuple async).
if (isSupported() && typeof window !== 'undefined') {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    window.speechSynthesis.getVoices();
  });
}

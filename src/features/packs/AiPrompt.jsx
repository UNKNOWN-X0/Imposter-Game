/**
 * A prompt to paste into any AI chat, so it writes the list in the format
 * the editor reads.
 *
 * Nothing is sent anywhere: it is text the person copies, and whatever comes
 * back is pasted into the word box and goes through the same parser and
 * findings as anything typed. The topic is the pack's name; the words are
 * asked for in the pack's word language, whatever language the buttons are in.
 * The editor shows it in a sheet behind its "Write it with AI" row.
 */

import { useState } from 'react';
import { PACK_LIMITS } from '../../content/words/custom.js';
import { useT } from '../../i18n/index.jsx';
import { CheckIcon, CopyIcon } from '../../ui/icons/index.jsx';
import { NumberTiles } from '../../ui/primitives/Choices.jsx';

const COUNTS = [30, 50, 100];

export function aiPrompt(t, { topic, lang, count }) {
  return t('packs.ai.prompt', {
    topic: topic.trim() || t('packs.ai.anyTopic'),
    lang,
    count,
    max: PACK_LIMITS.word,
  });
}

export function AiPrompt({ topic, langName }) {
  const { t } = useT();
  const [count, setCount] = useState(50);
  const [copied, setCopied] = useState(false);
  const prompt = aiPrompt(t, { topic, lang: langName, count });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — the prompt is on screen to select by hand */
    }
  };

  return (
    <div className="stack tight">
      <p className="hint">{t('packs.ai.help')}</p>
      <div className="stack tight">
        <span className="field-label">{t('packs.ai.count')}</span>
        <NumberTiles
          label={t('packs.ai.count')}
          value={count}
          onChange={setCount}
          options={COUNTS.map((n) => ({ value: n, label: String(n) }))}
        />
      </div>
      <textarea
        className="input words ai-prompt-text"
        value={prompt}
        rows={9}
        readOnly
        aria-label={t('packs.ai.title')}
        onFocus={(e) => e.target.select()}
      />
      <button type="button" className="btn block" onClick={copy}>
        {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}{' '}
        {copied ? t('common.copied') : t('packs.ai.copy')}
      </button>
    </div>
  );
}

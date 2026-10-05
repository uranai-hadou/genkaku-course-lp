// These IDs are permanent editing references. Keep existing IDs when copy or order
// changes. Add new IDs without renumbering the existing ones.
(() => {
  const prefix = document.body.dataset.copyPrefix || '';
  const variant = document.body.dataset.copyVariant || '';
  const groups = [
    { id: 'A', name: '冒頭', selector: '.hero', fields: [
      ['A0', '講座名', '.top-ribbon'],
      ['A1', '呼びかけ', '.hero-kicker'],
      ['A2', 'メイン見出し', 'h1'],
      ['A3', '目指す姿', '.hero-promise'],
      ['A4', '講師名・実績', 'figcaption'],
    ] },
    { id: 'B', name: '最初のLINE案内', selector: '.hero-action', fields: [
      ['B1', '呼びかけ', '.cta-heading'],
      ['B2', 'ボタンの文言', '[data-line-cta]'],
      ['B3', '講座案内の条件', '.cta-note'],
    ] },
    { id: 'C', name: '読者の不安', selector: '.empathy', fields: [
      ['C1', '見出し', 'h2'],
      ['C2', '誰に習うかの不安', '.worries > p:nth-child(1)'],
      ['C3', '自信への不安', '.worries > p:nth-child(2)'],
      ['C4', '霊視への関心', '.worries > p:nth-child(3)'],
      ['C5', '締めの言葉', '.empathy-end'],
    ] },
    { id: 'D', name: '大切にする姿勢', selector: '.belief', fields: [
      ['D1', '見出し', 'h2'],
      ['D2', '霊視の習得', '.belief-circles > div:nth-child(1)'],
      ['D3', '相談者への姿勢', '.belief-circles > div:nth-child(3)'],
      ['D4', '相談者への向き合い方', '.reading > p:nth-child(1)'],
      ['D5', '締めの言葉', '.reading > p:nth-child(2)'],
    ] },
    { id: 'E', name: '途中のLINE案内', selector: 'main > .cta-block:not(.hero-action)', fields: [
      ['E1', '呼びかけ', '.cta-heading'],
      ['E2', 'ボタンの文言', '[data-line-cta]'],
    ] },
    { id: 'F', name: '学び方・個別指導', selector: '.support', fields: [
      ['F0', '講座内容の大見出し', '#support-title'],
      ['F1', 'マンツーマン指導', '.support-personal h3'],
      ['F2', '旧・指導の回数', null, 'F1に統合（欠番）'],
      ['F3', '旧・1対1の指導', null, 'F1に統合（欠番）'],
      ['F5', '実演・施術・質疑応答', '.support-personal p'],
      ['F6', '動画とスライドの見出し', '.support-video h3'],
      ['F4', '動画学習と受講後の閲覧', '.support-video p'],
      ['F7', 'セミナーの見出し', '.support-seminar h3'],
      ['F8', 'セミナーの説明', '.support-seminar p:nth-of-type(1)'],
      ['F9', '受講生同士の交流', '.support-seminar p:nth-of-type(2)'],
    ] },
    { id: 'G', name: '受講生の実例', selector: '.testimonials', fields: [
      ['G1', '見出し', 'h2'],
      ['G2', '旧・紹介文', null, '削除済み（欠番）'],
      ['G3', '旧・1人目のラベル', null, '削除済み（欠番）'],
      ['G4', '受講生1名の紹介', null, '素材待ち：顔写真とご紹介を掲載予定'],
      ['G5', '受講生1名の感想', null, '素材待ち：ご本人の感想を掲載予定'],
      ['G6', '旧・2人目のラベル', null, '削除済み（欠番）'],
      ['G7', '旧・2人目の見出し', null, '削除済み（欠番）'],
      ['G8', '旧・2人目の本文', null, '削除済み（欠番）'],
      ['G9', '旧・3人目のラベル', null, '削除済み（欠番）'],
      ['G10', '旧・3人目の見出し', null, '削除済み（欠番）'],
      ['G11', '旧・3人目の本文', null, '削除済み（欠番）'],
    ] },
    { id: 'H', name: '玄岩の物語', selector: '.story', fields: [
      ['H1', '見出し', 'h2'],
      ['H2', '講師名・実績', 'figcaption'],
      ['H3', '人を知りたくて学び続けた', '.story-chapter:nth-child(1)'],
      ['H4', '心のブレーキとの出会い', '.story-chapter:nth-child(2)'],
      ['H5', '実践で視えるものが増えた', '.story-chapter:nth-child(3)'],
      ['H6', '学びから自分のやり方へ', '.story-chapter:nth-child(4)'],
      ['H7', '閉じていた力への気づき', '.story-chapter:nth-child(5)'],
      ['H8', '人に向き合える占い師を増やしたい', '.story-chapter:nth-child(6)'],
    ] },
    { id: 'I', name: '無料霊視の案内', selector: '.consultation', fields: [
      ['I1', '呼びかけ', '.consultation-intro'],
      ['I2', '見出し', 'h2'],
      ['I3', 'Zoomでの相談', '.reading > p:nth-child(1)'],
      ['I4', '素質の確認', '.reading > p:nth-child(2)'],
      ['I5', '講座をご案内する条件', '.consultation-condition > p:nth-child(1)'],
      ['I6', 'ご了承のお願い', '.consultation-condition > p:nth-child(2)'],
    ] },
    { id: 'J', name: '最後のLINE案内', selector: '.closing', fields: [
      ['J1', '見出し', 'h2'],
      ['J2', '対象となる方', '.reading > p:nth-child(1)'],
      ['J3', '無料霊視へのお誘い', '.reading > p:nth-child(2)'],
      ['J4', 'ボタンの文言', '[data-line-cta]'],
      ['J5', '旧・無料の案内', null, '削除済み（欠番）'],
    ] },
    { id: 'K', name: 'スマホの固定ボタン', selector: '.mobile-cta', fields: [
      ['K1', '旧・固定ボタン', null, '削除済み（欠番）'],
    ] },
    { id: 'L', name: 'ページ末尾', selector: '.footer', fields: [
      ['L1', '著作権表記', ':scope'],
    ] },
  ];

  // Explicit chapter IDs survive deletion or reordering in the HTML editor.
  if (document.querySelector('.story-chapter[data-story-copy-id]')) {
    const story = groups.find(group => group.id === 'H');
    story.fields = story.fields.map(field => {
      if (!/^H[3-8]$/.test(field[0])) return field;
      const selector = `.story-chapter[data-story-copy-id="${field[0]}"]`;
      return document.querySelector(selector)
        ? [field[0], field[1], selector]
        : [field[0], field[1], null, '削除済み（欠番）'];
    });
  }

  if (document.querySelector('.student-voice')) {
    const group = groups.find(group => group.id === 'G');
    group.fields = group.fields.map(field => {
      if (field[0] === 'G4') return ['G4', '森本さんの感想・見出し', '.student-voice h3'];
      if (field[0] === 'G5') return ['G5', '感受性の強さへの悩み', '.voice-excerpt-1'];
      return field;
    });
    group.fields.push(
      ['G12', '自分への理解と受け入れ', '.voice-excerpt-2'],
      ['G13', '自分らしい表現とサロン開業', '.voice-excerpt-3'],
      ['G14', '現在の活動と叶った夢', '.voice-excerpt-4'],
      ['G15', 'お名前・肩書き', '.voice-author'],
      ['G16', '森本さんのサイトへのリンク', '.voice-website'],
      ['G17', '原文からの抜粋の案内', '.voice-excerpt-label'],
      ['G18', '全文を開くボタン', '.voice-full summary'],
      ['G19', '感想の全文', '.voice-full-text'],
    );
  }

  // Shared learning topics keep matching IDs across the two versions.
  if (document.querySelector('.income-reasons')) {
    groups.splice(groups.findIndex(group => group.id === 'E'), 0, {
      id: 'M', name: '霊視の価値と鑑定料金の例', selector: '.income-reasons', fields: [
        ['M1', '霊視占い師が稼ぎやすいと考える理由', 'h2'],
        ['M2', '玄岩が考える2つの理由', '.reasons-intro'],
        ['M3', '才能と希少性・見出し', '.reason-skill h3'],
        ['M4', '素質が必要だからこその希少性', '.reason-skill p'],
        ['M5', '占術の掛け合わせ・見出し', '.reason-reading h3'],
        ['M6', '四柱推命と霊視で鑑定の精度を高める', '.reason-reading p'],
        ['M7', '知人の料金例・見出し', '.fee-example h3'],
        ['M8', '30分8万円の料金例', '.fee-amount'],
        ['M9', '知人の鑑定について', '.fee-description'],
        ['M10', '料金例についての補足', '.fee-context'],
        ['M11', '素質と掛け合わせを選ばれる力に', '.reasons-end'],
      ],
    });
  }

  if (document.querySelector('.authentic-reasons')) {
    const group = groups.find(group => group.id === 'M');
    group.name = '霊視を学ぶうえで大切なこと';
    const names = { M1: '霊視を学ぶうえで大切なこと', M2: '素質と占術の掛け合わせ', M3: '素質の確認・見出し', M4: '素質の確認と講座案内', M11: '本物の霊視占い師を目指す' };
    group.fields = group.fields.filter(field => !/^M(?:7|8|9|10)$/.test(field[0]))
      .map(([id, name, selector]) => [id, names[id] || name, selector]);
  }

  // Capacity copy only appears in versions that include the matching elements.
  const capacityFields = [
    ['A', ['A5', '講座の受け入れは先着10名', '.capacity-ribbon']],
    ['B', ['B4', '定員に達し次第受付終了', '.capacity-note']],
    ['F', ['F10', '10名限定の理由', '.capacity-reason']],
    ['J', ['J6', '最後の先着10名案内', '.capacity-banner']],
    ['J', ['J7', '対象者・申込順・LINEへの案内', '.capacity-conditions']],
  ];
  capacityFields.forEach(([groupId, field]) => {
    if (document.querySelector(field[2])) groups.find(group => group.id === groupId).fields.push(field);
  });

  if (document.querySelector('.story-learning')) {
    groups.find(group => group.id === 'H').fields.push(['H9', '学びと実践の歩み', '.story-learning']);
  } else if (document.querySelector('.story-message')) {
    groups.find(group => group.id === 'H').fields.push(['H9', '旧・学びと実践の歩み', null, '削除済み（欠番）']);
  }
  if (document.querySelector('.story-message')) {
    const story = groups.find(group => group.id === 'H');
    story.fields = story.fields.map(field => field[0] === 'H1'
      ? ['H1', '旧・学ぶ側だった頃の見出し', null, '削除済み（欠番）'] : field);
  }

  // Each variant keeps the same section mapping, with distinct editing IDs.
  if (prefix) {
    const incomeNames = { A3: '収入につなげる目標', C2: '誰から仕事の土台を学ぶか', C3: '収入につなげたい気持ち', C4: '仕事にする自信', D4: '選ばれる占い師への目標' };
    groups.forEach(group => {
      group.id = prefix + group.id;
      group.fields = group.fields.map(([id, name, selector, status]) => [
        prefix + id,
        variant === '稼げる訴求版' ? (incomeNames[id] || name) : name,
        selector,
        status?.replace(/\b[A-L]\d+\b/g, reference => prefix + reference),
      ]);
    });
  }

  function plainText(element) {
    const blockTags = new Set(['DIV', 'P', 'H1', 'H2', 'H3', 'FIGCAPTION', 'ARTICLE', 'SECTION', 'LI']);
    function walk(node) {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent;
      if (node.nodeType !== Node.ELEMENT_NODE || node.matches('svg, [aria-hidden="true"]')) return '';
      // The relocated portrait keeps its own H2 field; omit it from H8's text.
      if (element.matches('.story-chapter') && node.matches('.story-portrait')) return '';
      if (node.tagName === 'BR') return '\n';
      let text = [...node.childNodes].map(walk).join('');
      // Keep intentional visual line breaks independently of screen width.
      if (node.matches('.headline-first, .headline-second, .headline-third, .income-headline-lead, .income-headline-main, .mentor-name, .copy-line')) text += '\n';
      else if (blockTags.has(node.tagName)) text += '\n';
      return text;
    }
    return walk(element).replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  const fields = new Map();
  groups.forEach(group => {
    group.element = document.querySelector(group.selector);
    if (group.element) group.element.dataset.copyGroup = group.id;
    group.fields = group.fields.map(([id, name, selector, status]) => {
      if (status) return { id, name, missing: true, status };
      const element = selector === ':scope' ? group.element : group.element?.querySelector(selector);
      if (!element) return { id, name, missing: true };
      element.dataset.copyId = id;
      element.dataset.copyName = name;
      const field = { id, name, element, text: plainText(element) };
      fields.set(id, field);
      return field;
    });
  });

  function scrollToField() {
    const id = location.hash.replace(/^#copy-/, '');
    const field = fields.get(id);
    if (field) {
      const disclosure = field.element.closest('details');
      if (disclosure) disclosure.open = true;
      field.element.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  }
  const params = new URLSearchParams(location.search);
  if (params.get('review') !== '1') {
    if (location.hash.startsWith('#copy-')) {
      document.fonts.ready.then(scrollToField);
      window.addEventListener('hashchange', scrollToField);
    }
    return;
  }

  document.body.classList.add('copy-review');
  document.title = `文章の修正番号｜${variant ? variant + '｜' : ''}玄岩LP`;
  let view = params.get('view') === 'list' ? 'list' : 'page';
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const toolbar = make('aside', 'copy-toolbar');
  const title = make('strong', 'copy-toolbar-title', variant ? `${variant}｜文章の修正番号` : '文章の修正番号');
  const hint = make('p', 'copy-toolbar-hint', `例：「${prefix}A2を○○に変更」「${prefix}G全体を短く」`);
  const nav = make('nav', 'copy-toolbar-nav');
  nav.setAttribute('aria-label', '文章の確認方法');
  const pageButton = make('button', '', 'LPで見る');
  const listButton = make('button', '', '一覧で見る');
  pageButton.type = listButton.type = 'button';
  const normalLink = make('a', '', '通常表示');
  const normalUrl = new URL(location.href);
  normalUrl.searchParams.delete('review');
  normalUrl.searchParams.delete('view');
  normalUrl.hash = '';
  normalLink.href = normalUrl.href;
  nav.append(pageButton, listButton, normalLink);
  const jump = make('select', 'copy-jump');
  jump.setAttribute('aria-label', '確認するグループへ移動');
  const prompt = make('option', '', 'グループへ移動');
  prompt.value = '';
  jump.append(prompt);
  groups.forEach(group => {
    const option = make('option', '', `${group.id}｜${group.name}`);
    option.value = group.id;
    option.disabled = !group.element;
    jump.append(option);
  });
  toolbar.append(title, hint, nav, jump);
  document.body.prepend(toolbar);

  const list = make('main', 'copy-catalog');
  list.setAttribute('aria-label', 'LPの文章一覧');
  const status = make('p', 'copy-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  document.body.append(status);
  let statusTimer;
  function announce(message) {
    status.textContent = message;
    status.classList.add('visible');
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => status.classList.remove('visible'), 4000);
  }

  async function copyId(id) {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(id);
        copied = true;
      }
    } catch { /* Local-network HTTP can use the selection fallback below. */ }
    if (!copied) {
      const previousFocus = document.activeElement;
      const input = make('textarea', 'copy-buffer');
      input.value = id;
      input.readOnly = true;
      document.body.append(input);
      input.focus({ preventScroll: true });
      input.select();
      input.setSelectionRange(0, id.length);
      try { copied = document.execCommand('copy'); } catch { /* Show the ID for manual copying. */ }
      input.remove();
      previousFocus?.focus({ preventScroll: true });
    }
    announce(copied ? `${id} をコピーしました` : `修正番号は ${id} です`);
  }

  groups.forEach(group => {
    const section = make('section', 'copy-catalog-group');
    section.dataset.catalogGroup = group.id;
    section.append(make('h2', '', `${group.id}｜${group.name}`));
    group.fields.forEach(field => {
      const card = make('article', 'copy-card');
      const heading = make('h3', '', `${field.id}｜${field.name}`);
      const content = make('p', 'copy-card-text', field.missing ? (field.status || 'この文章は現在ありません。') : field.text);
      const actions = make('div', 'copy-card-actions');
      const copyButton = make('button', '', `${field.id} をコピー`);
      copyButton.type = 'button';
      copyButton.addEventListener('click', () => copyId(field.id));
      actions.append(copyButton);
      if (!field.missing) {
        const viewLink = make('a', '', 'LPで見る');
        viewLink.href = `#copy-${field.id}`;
        viewLink.addEventListener('click', event => {
          event.preventDefault();
          setView('page', field.id);
        });
        actions.append(viewLink);
      }
      card.dataset.catalogId = field.id;
      card.append(heading, content, actions);
      section.append(card);
    });
    list.append(section);
  });
  document.querySelector('.ad-page').after(list);

  function setView(next, targetId) {
    view = next;
    const listing = next === 'list';
    document.body.classList.toggle('copy-list-view', listing);
    list.hidden = !listing;
    document.querySelector('.ad-page').hidden = listing;
    pageButton.setAttribute('aria-pressed', String(!listing));
    listButton.setAttribute('aria-pressed', String(listing));
    const url = new URL(location.href);
    url.searchParams.set('view', next);
    url.hash = targetId ? `copy-${targetId}` : '';
    history.replaceState(null, '', url);
    requestAnimationFrame(() => {
      if (targetId && !listing) scrollToField();
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
  pageButton.addEventListener('click', () => setView('page'));
  listButton.addEventListener('click', () => setView('list'));
  jump.addEventListener('change', () => {
    if (!jump.value) return;
    const target = view === 'list'
      ? list.querySelector(`[data-catalog-group="${jump.value}"]`)
      : groups.find(group => group.id === jump.value)?.element;
    target?.scrollIntoView({ block: 'start', behavior: 'instant' });
    jump.value = '';
  });
  // In review mode, tapping a LINE button identifies its text instead of opening LINE.
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-line-cta]');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    copyId(button.dataset.copyId);
  }, true);
  const initialId = location.hash.startsWith('#copy-') ? location.hash.slice(6) : undefined;
  setView(view, initialId);
  if (initialId) document.fonts.ready.then(scrollToField);
})();

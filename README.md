# 玄岳 霊視占い師育成講座・LINE登録LP

シャンパンゴールドを基調に、LINE追加から無料のオンライン対面霊視へ案内する広告LPです。PCもスマートフォンも本文幅は最大390px。小さい画面では画面幅に合わせて表示します。

## 2種類のLP

| 訴求 | 編集するファイル | ローカル表示 | 公開パス | 修正番号 |
|---|---|---|---|---|
| 本物の霊視ができる占い師 | `index.html` | `/` | `/authentic.html` | A2、G13など |
| 稼げる霊視占い師 | `income.html` | `/income.html` | `/` または `/income.html` | R-A2、R-G13など |

公開URL：https://genkaku-reishi-course.alphaz0930.chatgpt.site

本物訴求版は、誰に学ぶか迷う方・学んでも自信がない方に向けた構成です。素質の確認、霊視と占術の掛け合わせ、相談者に向き合う姿勢を伝えます。稼げる訴求版の鑑定料金例や収入訴求は含みません。

両方に、最新の講座説明、森本あきこさんの写真・感想・太字の指定、講師紹介の配置、先着10名の案内、LINE導線を反映しています。本文内のLINEボタンは3か所です。料金表・プラン比較・ナビゲーションは設けていません。

## ローカルで確認する

```sh
npm run dev
```

本物訴求版は `http://localhost:3000/`、稼げる訴求版は `http://localhost:3000/income.html` を開きます。

## 文章を編集する

- HTML内のグループ番号のコメントを検索し、該当の文章を変更します。保存後にブラウザを再読み込みするとローカルに反映されます。
- `?review=1&view=page` を付けると番号付きLP、`?review=1&view=list` を付けると文章一覧になります。公開ページでも利用できます。
- 本物訴求版の原稿一覧は `COPY_GUIDE.md`、稼げる訴求版は `COPY_GUIDE_INCOME.md` です。HTMLを直接編集した場合は原稿一覧も更新します。
- 修正番号は固定です。移動した文章も番号を変えず、削除した番号は欠番として残します。H1・H3〜H7・H9は削除済み、講師の現在のメッセージはH8です。
- 森本さんの抜粋は `voice-excerpts` 内の4段落、全文は `voice-full-text` 内です。お名前・肩書き・外部リンクは感想見出しの直下、写真の上にあります。
- `<br>` は明示的な改行、`<strong>` は太字です。長文は自然な折り返しを基本にし、細かすぎる手動改行を避けます。`copy-line` は行、`copy-phrase` は意味のまとまりを示します。
- 本文はスマホで22px。料金例の注記と著作権表記は16pxです。レスポンシブ指定は本文の表示幅を基準にしたCSSコンテナクエリです。
- 共通のスタイル・動作は `style.css`、`app.js`、`copy-review.css`、`copy-review.js` です。`data-lp-layout="phone"` が両版のスマホ幅レイアウトを指定します。

確認モード内でLINEボタンを押すと、編集用の番号をコピーします。通常表示では公式LINEへ移動します。

## LINEと講座の案内

`config.js` はHTMLの `data-copy-variant` に応じて、各LPの全LINEボタンに以下のURLを設定します。

- 本物訴求版：`https://utage-system.com/line/open/60PamOaeaVak?mtid=bjrQvo4kK9U7`
- 稼げる訴求版：`https://utage-system.com/line/open/60PamOaeaVak?mtid=7qt1BBj0lUfa`

無料のオンライン対面霊視で悩みを伺い、玄岳が素質があると判断した方に講座を案内します。「先着10名」は講座の受け入れ人数です。無料霊視やLINE追加の人数制限ではありません。

## 公開

`.openai/hosting.json` の既存Siteを使用します。`node publish-static.mjs` で公開用ファイルを `dist/` に書き出します。

- `income.html` → `dist/index.html` と `dist/income.html`
- `index.html` → `dist/authentic.html`
- 共通のCSS・JavaScript・画像を同梱

HTMLのローカル保存だけでは公開ページは更新されません。公開に反映するにはSitesの再公開が必要です。`noindex, nofollow` は両版にあります。現在の公開範囲は公開です。

## 素材

- 講師アイコン：`assets/genkaku-icon.jpg`（ユーザー提供）
- 森本さんの施術写真：`assets/morimoto-akiko.jpg`（ユーザー提供。元の縦横比を保持）
- フォント：Noto Sans JP / Noto Serif JP。読み込めない場合はシステムフォント。
- 参考LP：https://slhhz.hp.peraichi.com/

## GitHub Pages

GitHub: https://github.com/uranai-hadou/genkaku-course-lp

- 稼げる訴求版: https://uranai-hadou.github.io/genkaku-course-lp/
- 本物訴求版: https://uranai-hadou.github.io/genkaku-course-lp/authentic.html

`main` にpushすると、GitHub Actionsが `publish-static.mjs` を実行して `dist/` を公開します。両LPのMetaピクセルIDは `4129005744063521` です。

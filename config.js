// LPの訴求ごとにUTAGEの流入計測リンクを切り替えます。
const lineUrls = {
  '本物訴求版': 'https://utage-system.com/line/open/60PamOaeaVak?mtid=bjrQvo4kK9U7',
  '稼げる訴求版': 'https://utage-system.com/line/open/60PamOaeaVak?mtid=7qt1BBj0lUfa',
};
window.GENKAKU_CONFIG = {
  lineUrl: lineUrls[document.body.dataset.copyVariant] || '',
};

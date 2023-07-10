// The valid share string is like any of the following:

// https://live.bilibili.com/21603945
// https://www.bilibili.com/video/BV1yT41147q3/
// 【给什么都不懂的AI装上四肢，它能自己学习走路吗？】 https://www.bilibili.com/video/BV1yT41147q3/?share_source=copy_web&vd_source=6c8ef6bc4bd8d0ef0113d273e2b1a79a

// The valid player string is like any of the following.
// We only generate the src attribute of the iframe tag here.
// <iframe src="https://player.bilibili.com/player.html?aid=486487396&bvid=BV1yT41147q3&cid=1138543297&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
// <iframe style="width: 700px;height: 400px;" src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=21603945&quality=0" frameborder="no"    framespacing="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe>

export interface ParsedShare {
  isLive: boolean;
  playerUrl: string;
  sourceUrl: string;
}
export function parseShareURL(shareUrl: string): ParsedShare | undefined {
  try {
    const parts = shareUrl.split(/[\s\n]+/);
    if (parts.length === 0) {
      return undefined;
    }
    const url = new URL(parts[parts.length - 1], location.href);
    if (url.hostname === 'www.bilibili.com' && url.pathname.startsWith('/video/')) {
      const id = url.pathname.slice('/video/'.length).replace(/\/$/, '');
      const playerUrl = new URL('https://player.bilibili.com/player.html');
      playerUrl.searchParams.set('bvid', id);
      return {
        isLive: false,
        sourceUrl: url.href,
        playerUrl: playerUrl.href,
      };
    }
    if (url.hostname === 'live.bilibili.com') {
      const id = url.pathname.replace(/^\//, '').replace(/\/$/, '');
      const playerUrl = new URL(
        'https://www.bilibili.com/blackboard/live/live-activity-player.html'
      );
      playerUrl.searchParams.set('cid', id);
      playerUrl.searchParams.set('quality', '0');
      return {
        isLive: true,
        sourceUrl: url.href,
        playerUrl: playerUrl.href,
      };
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
}

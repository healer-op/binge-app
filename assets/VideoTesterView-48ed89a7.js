import {
  r as l,
  M as o,
  j as s,
  a as e,
  H as y,
  V as h,
  c as v,
  S as f,
  d as M,
  N as g,
  T as x,
  D as N,
  B as d,
  e as S
} from "./index-215edb74.js";
const c = {
    streamUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: o.MP4
  },
  B = {
    imdbId: "",
    tmdbId: "",
    meta: {
      id: "hello-world",
      title: "Big Buck Bunny",
      type: S.MOVIE,
      seasons: void 0,
      year: "2000"
    }
  };

function C() {
  const [r, i] = l.useState(null), [t, m] = l.useState(o.MP4), [n, u] = l.useState(""), p = l.useCallback(a => {
    i({
      streamUrl: a,
      type: t
    })
  }, [t]);
  return r ? s("div", {
    className: "fixed left-0 top-0 h-[100dvh] w-screen",
    children: [e(y, {
      children: e("html", {
        "data-full": "true"
      })
    }), s(h, {
      includeSafeArea: !0,
      autoPlay: !0,
      onGoBack: () => i(null),
      children: [e(v, {
        data: {
          captions: [],
          meta: B
        },
        linkedCaptions: []
      }), e(f, {
        source: r.streamUrl,
        type: t,
        quality: M.QUNKNOWN,
        captions: []
      })]
    })]
  }) : s("div", {
    className: "py-64",
    children: [e(g, {}), s(x, {
      classNames: "flex items-start flex-col space-y-4",
      children: [e("div", {
        className: "w-48",
        children: e(N, {
          options: [{
            id: o.MP4,
            name: "Mp4"
          }, {
            id: o.HLS,
            name: "hls/m3u8"
          }],
          selectedItem: {
            id: t,
            name: t
          },
          setSelectedItem: a => m(a.id)
        })
      }), s("div", {
        className: "mb-4 flex gap-4",
        children: [e("input", {
          type: "text",
          placeholder: "stream url here...",
          value: n,
          onChange: a => u(a.target.value)
        }), e(d, {
          onClick: () => p(n),
          children: "Play video"
        })]
      }), e(d, {
        onClick: () => i({
          streamUrl: c.streamUrl,
          type: c.type
        }),
        children: "Play default video"
      })]
    })]
  })
}
export {
  C as
  default
};

import { useSSRContext, withCtx, createTextVNode, createVNode, defineComponent, inject, computed, unref, ref, h, Suspense, nextTick, mergeProps, Transition, provide, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { _ as _export_sfc, P as PageRouteSymbol, u as useRoute, a as appLayoutTransition, b as _wrapIf, L as LayoutMetaSymbol, d as useNuxtApp } from '../server.mjs';
import { useRoute as useRoute$1 } from 'vue-router';
import { _ as __nuxt_component_0$1 } from './nuxt-link-dcdeaa20.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';

const layouts = {
  default: () => import('./default-6f692864.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* @__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => {
          var _a;
          return name === ((_a = route.meta.layout) != null ? _a : "default");
        }
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-9/12 m-auto h-full text-center py-5" }, _attrs))}><h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl relative mt-32 inline-block after:content-[&#39;&#39;] after:w-7 after:h-1 after:absolute after:left-14 sm:after:left-16 md:after:left-24 lg:after:left-1/2 after:top-20 after:bg-blue after:rounded"> About me </h1><p class="text-base sm:text-lg md:text-2xl mt-20 w-5/6 m-auto"> Here you will find more information about me,what I do, and my current skills mostly in terms of programming and technology </p><div class="flex flex-col items-center gap-10 lg:flex-row mt-24 justify-around lg:items-start"><div class="text-center lg:text-left h-1/2 lg:w-1/2"><h2 class="text-xl sm:text-2xl mb-10">Get to know me!</h2><p class="text-base sm:text-lg md:text-xl mb-12"> I&#39;m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming I&#39;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&#39;t hesitate to contact me. </p>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { path: "/", hash: "#contact" },
    class: "text-base sm:text-lg lg:text-xl inline-block bg-blue text-white px-16 py-5 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:transition-transform hover:ease-in-out hover:duration-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact `);
      } else {
        return [
          createTextVNode(" Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="text-left bg-alice-blue p-10 rounded-lg shadow-md h-4/5"><h2 class="text-2xl mb-10">My Skills</h2><ul class="text-base sm:text-lg md:text-xl"><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> HTML </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> CSS </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> JavaScript </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Vue </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> SASS </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> GIT </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Github </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Responsive Design </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> SEO </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Terminal </li><li class="flex item-center gap-3"><svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> PrimeVue </li></ul></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      projects: [
        {
          name: "Poem.tm",
          description: "Poem.tm is web app for poetry blog of our famous poet Kerim Hally. It was great experience for me ",
          link: "https://poemtm-megamaster.netlify.app"
        },
        {
          name: "PURSAT.TV",
          description: "PUSAT.TV is web app for Official reseller of AlemTv. PURSAT.TV offers subscribers more than 135 best international TV channels",
          link: "https://tv-project-megamaster.netlify.app"
        },
        {
          name: "BarberShop",
          description: "BarberShop is a app, which i created for my friend. It was my first experience in Vanilla.js",
          link: "https://barbershop-megamaster.netlify.app"
        },
        {
          name: "Forkify",
          description: "Forkify offers to user more than 1,000,000 recipes of food",
          link: "https://forkify-megamaster.netlify.app"
        },
        {
          name: "Porten",
          description: "Porten is a elegant clothes store. I created this template from scratch using the frontend tools i know",
          link: "https://porten-megamaster.netlify.app"
        },
        {
          name: "Omnifood",
          description: "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. ",
          link: "https://omnifood-megamaster.netlify.app"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-alice-blue h-screen py-5" }, _attrs))}><div class="w-9/12 m-auto text-center"><h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl relative mt-32 inline-block after:content-[&#39;&#39;] after:w-7 after:h-1 after:absolute after:left-12 sm:after:left-14 md:after:left-20 lg:after:left-20 xl:after:left-24 after:top-20 lg:after:top-24 after:bg-blue after:rounded"> Projects </h1><p class="text-base sm:text-lg md:text-2xl mt-20 w-5/6 m-auto"> Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>`);
  _push(ssrRenderComponent(_component_Swiper, {
    modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
    "slides-per-view": 1,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    pagination: true,
    class: "mt-30 w-11/12 sm:w-6/12 md:w-7/12 lg:w-4/12 xl:w-3/12"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.projects, (project) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: project,
            class: "py-20"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<h2 class="text-xl sm:text-2xl text-blue mb-5"${_scopeId2}>${ssrInterpolate(project.name)}</h2><p class="mb-10"${_scopeId2}>${ssrInterpolate(project.description)}</p>`);
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  to: project.link,
                  class: "bg-blue text-white px-16 py-5 rounded-lg hover:bg-chelsea-blue hover:transition-colors",
                  target: "_blank"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Go to project`);
                    } else {
                      return [
                        createTextVNode("Go to project")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode("h2", { class: "text-xl sm:text-2xl text-blue mb-5" }, toDisplayString(project.name), 1),
                  createVNode("p", { class: "mb-10" }, toDisplayString(project.description), 1),
                  createVNode(_component_nuxt_link, {
                    to: project.link,
                    class: "bg-blue text-white px-16 py-5 rounded-lg hover:bg-chelsea-blue hover:transition-colors",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Go to project")
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.projects, (project) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: project,
              class: "py-20"
            }, {
              default: withCtx(() => [
                createVNode("h2", { class: "text-xl sm:text-2xl text-blue mb-5" }, toDisplayString(project.name), 1),
                createVNode("p", { class: "mb-10" }, toDisplayString(project.description), 1),
                createVNode(_component_nuxt_link, {
                  to: project.link,
                  class: "bg-blue text-white px-16 py-5 rounded-lg hover:bg-chelsea-blue hover:transition-colors",
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Go to project")
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_layout = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_about = __nuxt_component_2;
  const _component_projects = __nuxt_component_3;
  _push(ssrRenderComponent(_component_nuxt_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="home" class="bg-alice-blue h-screen flex justify-between items-center flex-col px-1 pt-72 pb-2"${_scopeId}><div class="text-center"${_scopeId}><h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-10 bold"${_scopeId}> Hello! I&#39;m Muhammetaly Yuzbashyev </h1><p class="text-base sm:text-lg md:text-2xl mb-20"${_scopeId}> I&#39;m a Web Developer specializing in Frontend of Websites and Web Applications that won&#39;t leave you behind </p>`);
        _push2(ssrRenderComponent(_component_nuxt_link, {
          to: { path: "/", hash: "#projects" },
          class: "text-base sm:text-lg lg:text-xl inline-block bg-chelsea-blue text-white px-20 py-5 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Projects `);
            } else {
              return [
                createTextVNode(" Projects ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="w-7 h-12 border-2 rounded-xl relative"${_scopeId}><span class="absolute w-2 h-2 bg-blue left-1/2 top-2 -translate-x-1/2 rounded-full animate-wheel"${_scopeId}></span></div></section>`);
        _push2(ssrRenderComponent(_component_about, { id: "about" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_projects, { id: "projects" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("section", {
            id: "home",
            class: "bg-alice-blue h-screen flex justify-between items-center flex-col px-1 pt-72 pb-2"
          }, [
            createVNode("div", { class: "text-center" }, [
              createVNode("h1", { class: "text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-10 bold" }, " Hello! I'm Muhammetaly Yuzbashyev "),
              createVNode("p", { class: "text-base sm:text-lg md:text-2xl mb-20" }, " I'm a Web Developer specializing in Frontend of Websites and Web Applications that won't leave you behind "),
              createVNode(_component_nuxt_link, {
                to: { path: "/", hash: "#projects" },
                class: "text-base sm:text-lg lg:text-xl inline-block bg-chelsea-blue text-white px-20 py-5 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Projects ")
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "w-7 h-12 border-2 rounded-xl relative" }, [
              createVNode("span", { class: "absolute w-2 h-2 bg-blue left-1/2 top-2 -translate-x-1/2 rounded-full animate-wheel" })
            ])
          ]),
          createVNode(_component_about, { id: "about" }),
          createVNode(_component_projects, { id: "projects" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-21a497da.mjs.map

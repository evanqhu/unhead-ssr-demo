import { renderToString } from 'vue/server-renderer'
import { renderSSRHead } from '@unhead/ssr'
import { createApp } from './main'

export async function render(_url: string) {
  const { app, head } = createApp()

  await head.resolveTags()
  const payload = await renderSSRHead(head)
  console.log("🚀🚀🚀 payload", payload);
  

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {}
  const html = await renderToString(app, ctx)

  return { html, payload }
}

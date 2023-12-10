import { Icon } from '@/components/Icon'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="absolute left-0 top-0 flex w-full flex-row justify-center py-6">
        <Icon
          glyph="logo"
          size={{ width: 300, height: 54 }}
          className="text-gray-900"
        />
      </div>
      <span className="text-xl">Сайт ясилиш җәриянида...</span>
    </main>
  )
}

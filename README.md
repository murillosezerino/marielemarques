# Mariele Marques · Site

Next.js 14 + DaisyUI + Tailwind CSS

## Stack
- **Next.js 14** (App Router)
- **DaisyUI 4** — tema customizado `mariele`
- **Tailwind CSS 3**
- **TypeScript**

## Rodar localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy na Vercel

### Via CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Via GitHub
1. Push para GitHub
2. Acesse vercel.com → New Project
3. Conecte o repositório
4. Deploy automático ✓

## Adicionar a foto da Mariele

1. Coloque a foto em `/public/foto-mariele.jpg`
2. No `Hero.tsx`, substitua o placeholder:

```tsx
// Remova o div placeholder e descomente:
<Image
  src="/foto-mariele.jpg"
  alt="Mariele Marques"
  fill
  className="object-cover object-top"
  priority
/>
```

3. Mesma coisa no `Sobre.tsx` com `/public/foto-sobre.jpg`

## Personalização rápida

- Cores → `tailwind.config.ts` (tema `mariele`)
- Textos → direto nos componentes em `/components/`
- WhatsApp → busca por `wa.me/5511968987112` e substitui o número

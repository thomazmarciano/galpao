# Galpão Prime — SMATX Garage Service 🚗

> Offline-first vehicle inspection platform built for real-world garage operations.

PWA (Progressive Web App) desenvolvida para inspeção automotiva em oficinas, centros de reparo e operações de vistoria.

A aplicação permite selecionar visualmente partes do veículo, registrar informações do atendimento e gerar relatórios em PDF com compartilhamento nativo em dispositivos móveis.

## Principais funcionalidades

✅ Seleção visual interativa de peças via SVG  
✅ Agrupamento inteligente de peças relacionadas  
✅ Geração automática de relatório em PDF  
✅ Compartilhamento nativo no iOS e Android  
✅ Funcionamento offline (PWA + Service Worker)  
✅ Instalação na tela inicial do dispositivo

---

## Demo

Acesse:

`https://thomazmarciano.github.io/galpao/`

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Service Workers
- Web App Manifest
- jsPDF
- Canvas API
- SVG

---

# Instalação no Android

## Google Chrome

1. Acesse a aplicação no navegador Chrome
2. Aguarde o carregamento completo
3. Toque no menu **⋮**
4. Toque em:

**"Instalar aplicativo"**

ou

**"Adicionar à tela inicial"**

5. Confirme a instalação

Após instalada, a aplicação funcionará em modo standalone.

---

# Instalação no iPhone (iOS)

## Safari

1. Acesse a aplicação no Safari
2. Aguarde o carregamento completo
3. Toque no botão de compartilhamento

(ícone quadrado com seta para cima)

4. Role as opções
5. Toque em:

**"Adicionar à Tela de Início"**

6. Confirme

A aplicação será instalada como app nativo.

---

# Uso offline

Após a primeira abertura com internet:

1. Abra a aplicação
2. Aguarde alguns segundos para cache completo
3. Feche a aplicação
4. Desative internet
5. Abra novamente

A aplicação continuará funcionando offline.

---

# Estrutura do projeto

```txt
.
├── index.html
├── manifest.json
├── service-worker.js
├── carro.png
├── icon-192.png
└── icon-512.png
```

---

# Roadmap

## v6

- Persistência local
- Histórico de inspeções
- Assinatura do cliente
- Upload de fotos
- Backend opcional
- Multi-veículos

---

## Autor

**Thomaz Marciano Braga**  
Frontend / Fullstack Engineer

LinkedIn: `https://www.linkedin.com/in/thomazbr`

---

# Licença

MIT

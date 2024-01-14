# g-global

![Static Badge](https://img.shields.io/badge/sass-1.69.7-%239248bd)
![Static Badge](https://img.shields.io/badge/normalize.css-8.0.1-%237dd17d)
![Static Badge](https://img.shields.io/badge/vite-5.0.8-%234524d6)

## О проекте

- Одностраничный сайт по [макету из Figma](https://www.figma.com/file/pTrCKtx8ki9CwtJ6MW1vKa/Testing-Template?node-id=0%3A1).

- В качестве сборщика был использован [Vite](https://vitejs.dev/). Несмотря на то, что он менее кастомизируемый, чем Webpack, выбор был сделан в пользу скорости работы.

- При вёрстке использовался подход [Pixel Perfect](https://doka.guide/css/pixel-perfect/). Однако после введения ajax-запроса описание, подтягивающееся под заголовком, стало иметь рандомные размеры. Сейчас макет не полностью совпадает с изначальным.

- API для запроса бралось c [Bacon Ipsum](https://baconipsum.com/api/).

- Анимация появления флагов сделана в двух форматах:
  - для декстопов => поочередное появление через 3 секунды с задержкой в 0.4 секунды;
  - для планшетов и мобильных версий => одновременное появление через 3 секунды после открытия.

## Установка

```
npm i
```

или

```
yarn
```

## Скрипты

```
npm run dev
npm run build
npm run preview
```

или

```
yarn dev
yarn build
yarn preview
```

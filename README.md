# Esse projeto usa o NEXT.JS 

## Comandos para iniciar o projeto

```javascript
npx create-next-app@latest .    //Para startar o projeto. 
node --version                  //Verificar a versão do node. >20.0
yarn install || npm install     //Se der erro na instalação
```

# Informações úteis

Diferente do vite o nextJs starta o servidor de desenvolvimento com o comando 'yarn dev':
Nao usar o --turbopack pq ele dá problema na hora da renderização em tempo real
O arquivo layout.tsx é o responsável pelo nome ao lado do favicon


```javascript
yarn dev                        //Servidor desenvolvimento NEXTJS
yarn starta                     //Servidor desenvolvimetno VITE
```


# Configurações úteis

Para trocar a porta padrão 3000 para 5200 (porta da minha preferencia) fazer o seguinte:
- Vá no package.json e troque o comando "dev: next dev --turbopack" por "dev": "next dev -p 5200"

# Explicaçaão das rotas

No nextJs não é necessário instalar a biblioteca react-router para gerenciar as rotas. 
Com esse framework as rotas funcionam dessa maneira:

**TODAS** as rotas são representadas por pastas. Para uma rota funcionar ela deve estar dentro da pasta **src/app**. Caso contrário a rota não funciona.
Para uma rota ser **dinamica** ela dever ter o nome **[slug]**
Para uma pasta dentro de src/app **não ser lida como uma rota** ela deve estar entre **parentese**

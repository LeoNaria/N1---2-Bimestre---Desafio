# Exercício produtório em Node.js

<img alt="image" src="https://user-images.githubusercontent.com/59899335/233763233-05f01462-f723-4b2d-9105-9f8f7bed13d2.png">

### Exemplo 1

```javascript
//url
//serverAddress/api/produtorio?mode=recursive&m=4&n=5

//response
{
  "result":22.1
}
```

### Exemplo 2

```javascript
//url
//serverAddress/api/produtorio

//response
{
  "error":"parâmetro(s) inválido(s)",
  "pattern":"?mode={recursive|iterative}&m={number greater than zero}&n={number greater than or equal to m}"
}
```


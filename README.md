# Desafiojava node

## How to try

```sh
    npm run docker:build
    npm run docker:run
```

## Example postEncrypt



```sh
Post  http://localhost:8000/api/crypt/encrypt
body = {
   "message": "Falabella es el mejor retail"
}
```


> output: "F8%BE* 5 L.jo( ti\n),A'lLe4E-m351ra2\nAL.46as6/ e48re0L"


**


## Example postDecrypt


```sh
Post  http://localhost:8000/api/crypt/decrypt

body = {
  "message":  "F8%BE* 5 L.jo( ti\n),A'lLe4E-m351ra2\nAL.46as6/ e48re0L"
}
```


> output: "Falabella es el mejor retail"


**

made with love :heart:
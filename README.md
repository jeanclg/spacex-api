# SpaceX-API

SpaceX api é uma api que lista os próximos lançamentos da SpaceX nos próximos 6 meses a partir da data que é iniciada a aplicação.

Tecnologias usadas:

- Typescript
- Node.js
- Luxon
- Express
- Axion

## Instalação

Para instalar as dependências digite no seu terminal:

```sh
npm i
```

Renomeie o arquivo `.env.example` para `.env`.

para iniciar o servidor:
```sh
npm start
```
## Iniciando aplicação

Para visualizar o resultado vai no seu Postman ou Insomnia com o servidor iniciado, cria uma requisição nova do tipo `GET` com a URL:
```
http://localhost:4000/upcoming-launches
```

Resultado da requisição feita no dia 22/08/2021:
```json
{
  "launches": [
    {
      "name": "NOT AVAILABLE",
      "description": "NOT AVAILABLE",
      "from": "Vandenberg SFB, CA, USA",
      "to": "NOT AVAILABLE",
      "window_start": "31/08/2021"
    },
    {
      "name": "Inspiration4",
      "description": "Inspiration4 is the world’s first all-commercial astronaut mission to orbit. Jared Isaacman, founder and CEO of Shift4 Payments, is donating the three seats alongside him aboard Dragon to individuals from the general public. The Inspiration4 crew will receive commercial astronaut training by SpaceX on the Falcon 9 launch vehicle and Dragon spacecraft, orbital mechanics, operating in microgravity, zero gravity, and other forms of stress testing. They will go through emergency preparedness training, spacesuit and spacecraft ingress and egress exercises, as well as partial and full mission simulations.\r\nThe Crew Dragon spacecraft will remain in a 540 km high orbit for three days before reentering Earth's atmosphere for a soft water landing off the coast of Florida.",
      "from": "Kennedy Space Center, FL, USA",
      "to": "Low Earth Orbit",
      "window_start": "14/09/2021"
    },
    {
      "name": "NOT AVAILABLE",
      "description": "NOT AVAILABLE",
      "from": "Vandenberg SFB, CA, USA",
      "to": "NOT AVAILABLE",
      "window_start": "29/09/2021"
    },
    {
      "name": "NOT AVAILABLE",
      "description": "NOT AVAILABLE",
      "from": "Kennedy Space Center, FL, USA",
      "to": "NOT AVAILABLE",
      "window_start": "30/09/2021"
    },
    {
      "name": "SpX USCV-3 (NASA Crew Flight 3)",
      "description": "SpaceX Crew-3 will be the third crewed operational flight of a Crew Dragon spacecraft, and the fourth overall crewed orbital flight.",
      "from": "Kennedy Space Center, FL, USA",
      "to": "Low Earth Orbit",
      "window_start": "22/10/2021"
    },
    {
      "name": "NOT AVAILABLE",
      "description": "NOT AVAILABLE",
      "from": "Unknown Location",
      "to": "NOT AVAILABLE",
      "window_start": "30/10/2021"
    },
    {
      "name": "NOT AVAILABLE",
      "description": "NOT AVAILABLE",
      "from": "Kennedy Space Center, FL, USA",
      "to": "NOT AVAILABLE",
      "window_start": "30/10/2021"
    },
    {
      "name": "Double Asteroid Redirection Test (DART)",
      "description": "Double Asteroid Redirection Test (DART) mission is the first-ever mission to demonstrate the capability to deflect an asteroid by colliding a spacecraft with it at high speed â€“ a technique known as a kinetic impactor.\n\nDART is a planetary defense-driven test of one of the technologies for preventing the Earth impact of a hazardous asteroid: the kinetic impactor.  DARTâ€™s primary objective is to demonstrate a kinetic impact on a small asteroid.  The binary near-Earth asteroid (65803) Didymos is the target for DART.   While Didymosâ€™ primary body is approximately 800 meters across, its secondary body (or â€œmoonletâ€) has a 150-meter size, which is more typical of the size of asteroids that could pose a more common hazard to Earth.\n\nThe DART spacecraft will achieve the kinetic impact by deliberately crashing itself into the moonlet at a speed of approximately 6 km/s, with the aid of an onboard camera and sophisticated autonomous navigation software. The collision will change the speed of the moonlet in its orbit around the main body by a fraction of one percent, enough to be measured using telescopes on Earth.",
      "from": "Vandenberg SFB, CA, USA",
      "to": "Heliocentric N/A",
      "window_start": "23/11/2021"
    },
    {
      "name": "NOT AVAILABLE",
      "description": "NOT AVAILABLE",
      "from": "Cape Canaveral, FL, USA",
      "to": "NOT AVAILABLE",
      "window_start": "30/11/2021"
    }
  ]
}
```
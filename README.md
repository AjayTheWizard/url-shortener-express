# URL Shortener
URL Shortener built with Express, MongoDB, Mongoose and NanoID with Typescript.

Once You download files, Open Terminal and Type
```
// For yarn
yarn install
// For npm
npm install
```
Once downloading,
```
yarn dev // or
npm dev
```
## Try REST API
You can use `Postman` or `Thunder Client`.

### Shortening URL
Shortening URL is easy, Just send `POST` request with body,
```
{
  "url": "https://github.com/AjayTheWizard"
}
```
Response would be like,
```
{
  "fullPath": "https://github.com/AjayTheWizard",
  "shortUrl": "hAziXK6e",
  "view": 0,
  "_id": "61f40277073982354a35403f",
  "__v": 0
}
```
Just Grab `shortUrl` and Send `GET` request or navigate with Browser with url
```
// Example: http:localhost:5000/<shortUrl>
http:localhost:5000/hAziXK6e
```
**Tada!**, You'll redirected to `url` in Response of Previous `POST` Request. In our case, I'm redirected to `https://github.com/AjayTheWizard`

You can create custom Front-end to make more functionality.

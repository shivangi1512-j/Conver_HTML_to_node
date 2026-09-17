Hello everyone,

Aaje hu mara Node.js project nu explanation aapvano chu. Aa project ma me **Node.js, Express.js ane EJS** no use karyo che.

Mara project ma mainly 3 important files che:
**index.js, HomeControllers.js ane Home.ejs.**

---

### 1. index.js

Sauthi pela hu **index.js** file thi start karu chu.

Aa file mara project ni **main file** che, jya hu Express server create karyo che.

Sauthi pela:

`const express = require("express");`

Aa line thi hu Express module ne import karu chu.

Pachi:

`const HomeController = require("./Controllers/HomeControllers");`

Aa line thi hu **HomeControllers.js** file ne import karu chu, jethi hu controller ma banavel home function ne use kari shaku.

Pachi hu:

`const path = require("path");`

Path module import karyo che. Aa module no use views folder no proper path set karva mate thay che.

Pachi me:

`const PORT = 7276;`

lakhi ne server mate **7276 port number** set karyo che.

Pachi:

`const app = express();`

Aa line thi Express application create thay che.

Have important configuration che:

`app.set("view engine", "ejs");`

Aa thi hu Express ne kahu chu ke mara project ma **EJS view engine** use karvani che.

Pachi:

`app.set("views", path.join(__dirname, "View"));`

Aa line thi hu Express ne mara **View folder nu location** batavu chu. Aa folder ma mari `Home.ejs` file che.

Pachi:

`app.use(express.static(__dirname + "/public"));`

Aa middleware thi hu **public folder ni static files**, jem ke CSS, images vagere access kari shaku chu.

Have route banavyo che:

`app.get("/home", HomeController.home);`

Aa GET route che.

Jare browser ma hu `/home` URL open karish, tyare aa request **HomeController na home function** par jashe.

Last ma:

`app.listen(PORT, () => { ... })`

Aa thi server start thay che ane **7276 port par run thay che**.

Etle hu browser ma `localhost:7276/home` open kari ne mara project ne joi shaku chu.

---

### 2. HomeControllers.js

Have hu **HomeControllers.js** file explain karu chu.

Aa file ma maro **controller function** che.

Pehla Express require karyu che.

Pachi:

`exports.home = (req, res) => {`

Aa `home` naam nu function che.

Aa function ma `req` etle **request** ane `res` etle **response**.

Andar:

`res.render('home')`

lakhelu che.

Aa line EJS ni `home.ejs` file ne render kare che.

Etle jare user `/home` route par request kare che, tyare controller `home.ejs` page browser ma show kare che.

Aa rite me **route logic ane page rendering logic separate** rakhya che, je controller structure no basic concept che.

---

### 3. Home.ejs

Have last file che **Home.ejs**.

Aa mari actual webpage che.

Aa file ma me **HTML sathe Tailwind CSS** no use karyo che.

Head section ma:

`<script src="https://cdn.tailwindcss.com"></script>`

che, jethi hu Tailwind CSS classes directly use kari shaku.

Mara page nu background dark che ane tema navbar, hero section, features section, contact section, about section ane footer che.

Sauthi pela **Navbar** che.

Navbar ma `Our Service` logo che ane **Home, Features, About** jeva menu links che. Sathe `Get Started` button pan che.

Pachi **Hero Section** che.

Aa section ma `Welcome to Our Service` heading, productivity related description ane `Get Started` ane `Learn More` buttons che.

Pachi **Features Section** che.

Aa section ma 3 feature cards che:

First — **Fast & Reliable**

Second — **Customer Support**

Third — **Easy Integration**

Aa cards ma Tailwind CSS no use kari ne border, background, spacing ane hover effects add karya che.

Pachi **Contact Section** che, jema `Take Your Business to the Next Level` heading ane `Get Started` button che.

Pachi **About Us Section** che.

Aa section ma service vishe information aapeli che ane **100% Reliable, 24/7 Support** jeva cards che.

Last ma **Footer** che, jema `© 2026 Our Service. All Rights Reserved.` lakhyu che.

---

### Conclusion

So overall, mara project ma **index.js main server file** che.

**HomeControllers.js controller file** che, je request handle kari ne EJS page render kare che.

Ane **Home.ejs frontend webpage** che, jema mara project nu complete UI design che.

Aa project thi mane **Express server, routing, controller, EJS view engine ane Tailwind CSS** no basic practical understanding thay che.

Thank you.

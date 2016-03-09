
Pasar a ES6
===========











Desarrollo de MeBSC en Git & Heroku
====================================
<<<<<<< HEAD

Hacer cambios sobre un despliegue, ejemplo Pilot:
=======
Trucos:
- Ejecutar server node.js: # nodemon server.js

- Now you want to switch branches, but you don’t want to commit what you’ve been working on yet; so you’ll stash the changes. To push a new stash onto your stack, run git stash:

$ git stash
Saved working directory and index state \
  "WIP on master: 049d078 added the index file"
HEAD is now at 049d078 added the index file
(To restore them type "git stash apply")

- 


Hacer cambios sobre un despliegue, ejemplo Pilot
-------------------------------------------------


- Ir a la rama:
git checkout pilot

- Hacer los cambios correspondientes.......
git commit -m "Prueba"


- Ahora ya podemos enviar los cambios locales al remoto de gitbucket
git push origin pilot 

origin es el remoto de gitbucket

- Enviar cambios a Heroku
git push pilot pilot:master
          |       |
          |       +-----> de la brach pilot, pero en el repositorio es el master
          |                   (heroku solo permite la Master)
          |
          +---> git remoto


- Suponiendo quen ya hemos creado el indicador al repositorio de Heroku:
git remote add pilot git@heroku.com:mebsc-pilot.git
<<<<<<< HEAD
=======


Ejemplo creacion y despliege branch en heroku y respositorio en gitbucket
-------------------------------------------------------------------------
git branch pimpam
git checkout pimpam
git status
heroku create
git remote -v
git remote add pimpam https://git.heroku.com/mebsc-pimpam.git
git push pimpam pimpam:master
git status
git add .
git commit -m "change api's form pimpam"
git push pimpam pimpam:master
git push origin pimpam

Ejemplo de como desarrollar en local e incorporar en el resto de ramas
----------------------------------------------------------------------
El desarrollo en local esta configurado (api's i mongo local) de forma que sea donde realice los cambios del core, el cambio en el frontend se hara particularmente en cada Branches mediante las views.

La idea es que el codigo del backoffice y del frontend sea el máximo de compatible en cada una de las instancias que haga del proyecto, intentar que únicamente se hagan modificiones sobre las "views".



git status
git add .
git commit -m "bug for searching dates"
git push origin devlocal
git checkout master
git merge devlocal
git log --oneline
git status



Hacer cambios en la base de MeBSC
---------------------------------

La idea es que tenemos una rama para los desarrollos comunes, que es la devlocal que nossirve para hacer las pruebas en local y 


Backups de mongodb
-------------------
En Imac a traves de launchd:
http://alvinalexander.com/mac-os-x/mac-osx-startup-crontab-launchd-jobs





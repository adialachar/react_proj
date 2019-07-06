#!/bin/bash

name=`git config --get user.name`
email=`git config --get user.email`

author="${name} <${email}>"

sudo git commit --author "$author" $@

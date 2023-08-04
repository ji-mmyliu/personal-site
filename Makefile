setup:
	npm install -g yarn
	yarn install

test:
	npx jest

deploy:
	yarn build
	mkdir -p /var/www/jimmyliu-dev/html-backup/backup-${GIT_COMMIT}
	rm -rf /var/www/jimmyliu-dev/html-backup/backup-${GIT_COMMIT}/*
	mv /var/www/jimmyliu-dev/html/* /var/www/jimmyliu-dev/html-backup/backup-${GIT_COMMIT}
	cp -r ./dist/* /var/www/jimmyliu-dev/html/
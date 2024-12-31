deploy-v4b:
	rsync -avhzL --delete \
		--no-perms --no-owner --no-group \
		--exclude .git \
		--filter=":- .gitignore" \
		-e "ssh -i /Users/sinhvu/Works/keys/pulse.domains/johnny_vu.pem" \
		out/* ubuntu@54.161.57.16:/var/www/widget.pulse.domains/html

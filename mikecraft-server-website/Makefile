# Define variables
REPO_DIR := ./mikecraft-server-website
COMMIT_MESSAGE := "Netlify commit"

# Default target
all: commit

# Add, commit, and push changes
commit:
	cd $(REPO_DIR) && \
	git add . && \
	git commit -m "$(COMMIT_MESSAGE)" && \
	git push

# ...other targets if needed...

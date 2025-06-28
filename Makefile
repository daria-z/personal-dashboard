develop:
	npm run dev

lint:
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format

build:
	npm run build

preview:
	npm run preview

check: lint format
	@echo "All checks passed!"

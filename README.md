# FRAME LUNCH ESlint config

フレームランチのstylelint設定(基本)

## 使い方

### インストール

```bash
yarn add -D git+https://github.com/framelunch/stylelint-config-framelunch
```

### .stylelintrc

```json
{
    "extends": ["stylelint-config-framelunch"]
}
```

拡張したいならこんな感じで

```json
{
  "extends": ["stylelint-config-framelunch"],
  "ignoreFiles": [
    ".tmp/**/*",
    "build/**/*",
    "src/**/_**.css"
  ],
  "rules": {
    "max-empty-lines": 1
  }
}
```

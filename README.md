# FRAME LUNCH stylelint config

フレームランチのstylelint設定(基本)

## 使い方

### インストール

```bash
# use newest version
yarn add -D framelunch/stylelint-config-framelunch
# use target version
yarn add -D framelunch/stylelint-config-framelunch#v0.1.0
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

module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    'node_modules/**/*'
  ],
  rules: {
    /*
     * ECSS basic rules
     */
    // 空のブロックを禁止
    'block-no-empty': true,
    // 不正なhexを禁止
    'color-no-invalid-hex': true,
    // コロンのあとにはスペース
    'declaration-colon-space-after': 'always',
    // コロンの前にはスペースなし
    'declaration-colon-space-before': 'never',
    'function-comma-space-after': 'always',
    'function-url-quotes': 'always',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'max-empty-lines': 2,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-no-vendor-prefix': true,
    'declaration-block-no-duplicate-properties': true,
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-max-id': 0,
    'string-quotes': 'double',
    'value-no-vendor-prefix': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'selector-max-universal': 0,
    'declaration-block-no-shorthand-property-overrides': true,
    indentation: 4,
    'selector-max-specificity': '0,2,0',

    /*
     * Manual
     */
    // コメント記号とコメント本文の間にスペースを共用する 無効化 IntelliJと相性が悪い
    'comment-whitespace-inside': null,
    // @なにがしで意味不明なものを無効化 mixin関係を通す
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'define-mixin'] }],
    // @の前に空行を強制 いくつかのルールは例外
    'at-rule-empty-line-before': ['always', {
        except: ['first-nested'],
        ignore: [
            'after-comment',
            'blockless-after-same-name-blockless'
        ]
    }],
    // セレクタの詳細度がややこしくならないように制限をかける
    'selector-max-specificity': ['0,2,0', {
        ignoreSelectors: [
            // 擬似クラスは通す
            '/:.*/',
            // -XXX など、-はじまりのBEMのMを想定したクラスは通す
            '/-[^-].*/',
            // input:checked + label などのフォーム装飾系でよく使うものは通す
            '/ \\+ /'
        ]
    }],
    // コメントの前に改行を共用 例外もあり
    'comment-empty-line-before': ['always', {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands']
    }],
  }
};

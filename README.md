## TerminalでDBにアクセス
1. `docker compose exec db bash`
2. `psql -h localhost -U postgres -d yojilog`
3. データベース一覧を見る `\l`
4. データベース切り替え `\c yojilog` (今回は２で切り替え済み)
5. テーブル一覧 `\dt`
\d テーブル名        # テーブルの構造を表示
\du                 # ユーザー一覧を表示
\dx                 # インストールされた拡張機能を表示
\timing             # クエリの実行時間を表示
\q                  # psqlを終了

# よく使うSQLコマンド：
SELECT current_database();          # 現在のデータベース名を表示
SELECT version();                   # PostgreSQLのバージョンを表示
SELECT * FROM テーブル名 LIMIT 5;    # テーブルの先頭5行を表示

-- テーブル内の全てのカラムと行を表示
SELECT * FROM テーブル名;

-- 特定のカラムのみ表示
SELECT カラム1, カラム2 FROM テーブル名;

-- レコード数を確認
SELECT COUNT(*) FROM テーブル名;

-- テーブルのカラム情報を確認
SELECT column_name, data_type, character_maximum_length
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = 'テーブル名';

便利なTips：
- \? でpsqlのコマンド一覧を表示できます
- \h でSQLコマンドのヘルプを表示できます
- コマンドは大文字小文字を区別しません
- SQLコマンドは必ずセミコロン(;)で終える必要があります

# Migration方法
1. npx prisma migrate dev --name init

# Seed
npx prisma db seed

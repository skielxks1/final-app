# 📦 Backup and Data Recovery Plan

## 1. Scope

Periodic backup of the `tareas` table in PostgreSQL.

## 2. Automation and Retention

- **Frequency:** Daily at 02:00 UTC.
- **Retention:** 14 days in secure storage.

## 3. Error Recovery

```bash
pg_restore --clean -h <HOST> -U <USERNAME> -d <DATABASE_NAME> backup.sql
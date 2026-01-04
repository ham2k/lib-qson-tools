# lib-qson-tools

A TypeScript library with tools to help manage data in QSON: A standard notation for Amateur Radio QSO Information

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## Usage

This library provides TypeScript type definitions and utilities for working with QSON data, including:

- `QSON` and `CallInfo` TypeScript types
- `qsoKey()` - Generate unique keys for QSOs
- `roundedTimeKey()` - Generate time-rounded keys for matching QSOs

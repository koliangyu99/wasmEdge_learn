# WasmEdge Learn: QuickJS + Rust WebAssembly Experiments

This repository explores using [WasmEdge](https://wasmedge.org/) to run WebAssembly modules built from both JavaScript (QuickJS) and Rust. It includes:

- ✅ A QuickJS-based HTTP server that serves HTML and handles routes
- ✅ A Rust function compiled to WASM and executed via WasmEdge
- ✅ Step-by-step compatible with modern Rust and WasmEdge

---

## 📁 Project Structure

```plaintext
wasmEdge_learn/
├── server.js             # HTTP server using QuickJS
├── index.html            # HTML served by the QuickJS server
├── add.wasm              # Compiled Rust function (add two numbers)
├── wasmedge_quickjs.wasm # WasmEdge QuickJS runtime
├── rust_add/             # (Legacy) Rust function project (lib)
├── wasm_add_bin/         # ✅ Working Rust WASI binary project
│   └── src/main.rs       # Rust program that reads args and prints sum
│   └── Cargo.toml
├── modules/              # JS runtime modules for WasmEdge QuickJS

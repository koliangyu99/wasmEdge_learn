fn main() {
    let args: Vec<String> = std::env::args().collect();

    if args.len() != 3 {
        eprintln!("Usage: add <a> <b>");
        std::process::exit(1);
    }

    let a: i32 = args[1].parse().unwrap();
    let b: i32 = args[2].parse().unwrap();

    let result = a + b;
    println!("{}", result);
}

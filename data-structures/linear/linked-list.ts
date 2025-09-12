class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
  start: Node<T>;
  last: Node<T>;
  count: number = 0;

  constructor() {
    this.start = new Node<T>(null as unknown as T);
    this.last = this.start;
  }

  add(value: T) {
    const node = new Node<T>(value);
    this.last.next = node;
    this.last = node;
    this.count++;
  }

  remove(value: T) {
    let previous: Node<T> = this.start;
    let current = this.start.next;
    while (current) {
      if (current.value === value) {
        this.count--;
        previous.next = current.next;
        break;
      }

      previous = current;
      current = current.next;
    }

    return true;
  }

  contains(value: T): boolean {
    return this.indexOf(value) != -1;
  }

  indexOf(value: T): number {
    let index = 0;
    for (let v of this) {
      if (v === value) {
        return index;
      }
      index++;
    }
    return -1;
  }

  *[Symbol.iterator](): Generator<T> {
    let current = this.start.next;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  toString(): string {
    const arr = [...this];
    return `[${arr.toString()}]`;
  }
}

function run() {
  const list = new LinkedList<number>();
  list.add(100);
  list.add(3213);
  list.add(321);
  console.log(list.count);
  list.remove(321);
  console.log(list.count);
  console.log(list.indexOf(100));
  console.log(list.indexOf(1003));
  console.log(list.contains(100));
  console.log(list.contains(1300));
  console.log(list.toString());
}

run();

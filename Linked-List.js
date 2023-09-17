function Node(value) {
  this.data = value;
  this.next_node = null;
}

function Linked_List() {
  let head = null;
  /**
   *
   * @param {Number} value
   */
  this.append = (value) => {
    let new_node = new Node(value);
    if (head == null) {
      head = new_node;
    } else {
      let temp_node = head;
      while (temp_node.next_node != null) {
        temp_node = temp_node.next_node;
      }
      temp_node.next_node = new_node;
    }
  };

  this.prepend = (value) => {
    let new_node = new Node(value);
    if (head == null) {
      head = new_node;
    } else {
      let old_head = head;
      head = new_node;
      head.next_node = old_head;
    }
  };

  this.get_node = (index) => {
    if (head == null) return "invalid";
    if (this.size() - 1 < index) return "invalid";

    let count = 0;
    let temp_node = head;

    while (count != index) {
      temp_node = temp_node.next_node;
      count++;
    }

    return temp_node.data;
  };

  this.size = () => {
    let count = 0;
    let temp_node = head;
    while (temp_node != null) {
      ++count;
      temp_node = temp_node.next_node;
    }

    return count;
  };

  this.get_head = () => {
    if (head == null) return;
    return head.data;
  };

  this.get_tail = () => {
    if (head == null) return;
    let temp_node = head;

    while (temp_node.next_node != null) {
      temp_node = temp_node.next_node;
    }

    return temp_node.data;
  };

  this.to_string = () => {
    let str = "Head->";
    let temp_node = head;

    while (temp_node != null) {
      str += temp_node.data + "->";
      temp_node = temp_node.next_node;
    }

    return (str += "null");
  };

  this.pop = () => {
    if (head == null) return;

    let temp_node = head;
    let node_popped;
    while (temp_node.next_node.next_node != null) {
      temp_node = temp_node.next_node;
    }

    node_popped = temp_node.next_node;
    delete temp_node.next_node;

    return node_popped.data;
  };

  this.contains = (value) => {
    if (head == null) return;

    let temp_node = head;

    while (temp_node != null) {
      if (temp_node.data == value) return true;

      temp_node = temp_node.next_node;
    }

    return false;
  };

  this.get_index = (value) => {
    if (head == null) return;

    let temp_node = head;
    let count = 0;

    while (temp_node != null) {
      if (temp_node.data == value) return count;
      count++;

      temp_node = temp_node.next_node;
    }

    return "not found";
  };

  this.insert_at = (value, index) => {
    if (head == null) {
      this.prepend(value);
      return "No head so added value to head";
    }

    if (this.size() - 1 < index) return "index is more than size";

    if (index < 0) return "less than size";

    if (index == 0) {
      this.prepend(value);
      return "success";
    }

    let temp_node = head.next_node;
    let previous_node = head;
    let count = 1;

    while (temp_node != null) {
      if (count == index) {
        let new_node = new Node(value);
        previous_node.next_node = new_node;
        new_node.next_node = temp_node.next_node;
        return "success";
      }
      count++;
      previous_node = temp_node;
      temp_node = temp_node.next_node;
    }

    return "nothing found";
  };

  this.remove_at = (index) => {
    if (head == null) return "list empty";
    if (index < 0) return "less than size";
    if (this.size() - 1 < index) return "more than size";

    if (index == 0) {
      let new_head = head.next_node;
      let old_head = head;
      head = new_head;
      delete old_head;
      return "success";
    }

    let temp_node = head.next_node;
    let previous_node = head;
    let count = 1;

    while (temp_node != null) {
      if (count == index) {
        previous_node.next_node = temp_node.next_node;
        delete temp_node;
        return "success";
      }
      count++;
      previous_node = temp_node;
      temp_node = temp_node.next_node;
    }

    return "not found";
  };
}

let link = new Linked_List();

link.append(5);
link.append(7);
link.append(1);
link.prepend(10);
link.append(9);

console.log(link.to_string());
console.log("size", link.size());
console.log("head", link.get_head());
console.log("tail", link.get_tail());
console.log("get node", link.get_node(2));
console.log("pop", link.pop(), "current", link.to_string());
console.log("contained", link.contains(5), "not contained", link.contains(11));
console.log("get index", link.get_index(5));
console.log("insert", link.insert_at(11, 2));
console.log("before", link.to_string());
console.log("remove at", link.remove_at(3));
console.log("after list", link.to_string(0));

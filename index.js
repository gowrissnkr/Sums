// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;

//         this.insertEnd = function (element){
//             var node = new Node(element);

//             if(this.head == null){
//                 this.head = node;
//             }
//             else {
//                 var currNode = this.head;

//                 while(currNode.next !==null){
//                     currNode.next = currNode;
//                 }
//                 currNode.next = node;
//             }
//         }

//         this.insertAt = function (element,pos){

//             var node = new Node(element);

//             if(this.head == null){
//                 this.head = node;
//             }
//             if(pos == 0){
//                 node.next = this.head;
//                 this.head = node;

//             }
//             else{

//                 var currNode = this.head;
//                 var prev = null;
//                 var cnt = 0;

//                 while(cnt < pos){
//                     prev = currNode;
//                     currNode = currNode.next
//                 }
//                 prev.next = node;
//                 node.next = currNode


//             }

//         }

//         this.print = function(){
//             var currNode = this.head;
//             var List = " ";

//             while(currNode){
//                 List += currNode.value + " ";
//                 currNode = currNode.next;
//             }
//             console.log(List)
//         }
//     }
// }

// var ll = new LinkedList();

// ll.insertEnd(10)
// ll.insertEnd(20)
// ll.insertEnd(30)
// ll.insertEnd(40)
// ll.insertEnd(50)
// ll.insertAt(2,0)
// ll.insertAt(2,2)
// ll.insertAt(2,4)
// ll.insertAt(2,6)

// Write a program to find all pairs of an integer array whose sum is equal to a given number?

// let arr = [1, 5, 7, 2, 10, 22, 12, 15, 13, 8, 3, 9]
// let givenNumber = 22;
// let temp = []
// let z = 0;

// for (let i = 0; i < arr.length; i++) {
//     for(let j = i+1 ; j < arr.length ; j++){
//         if (arr[i] + arr[j] == givenNumber) {
//             temp[z] = [arr[i], arr[j]]
//             z++; 
//         }                  
//     }    
// }
// console.log(temp)

class Stack {
    constructor() {
        this.item = [];
        this.length = 0;

        this.push = function (element) {
            this.item.push(element)
            this.length++;
        }

        this.pop = function () {
            if (this.item.length <= 0) {
                return -1
            }
            else {
                this.item.pop()
                this.length--;
            }
        }

        this.peek = function () {
            if (this.item.length <= 0) {
                return -1
            }
            else {
                this.item(this.item.length - 1)
            }
        }
    }
}

function prefix(exp) {
    var element = exp.split('').reverse().join('')
    var stack = new Stack();
    for (let i = 0; i < element.length; i++) {
        if (element[i] == '+' ||
            element[i] == '-' || element[i] == '*' ||
            element[i] == '/' || element[i] == '^') {
                var op1 = stack.pop()
                var op2 = stack.pop()
                stack.push(op1 + op2 + element[i])
            
        }
        else {

          stack.push(element[i])

        }
    }
    return stack.pop();
}

console.log(prefix('+ab'))



class NodeHead<T> {
    private element: T
    private next: any
    constructor(element: T) {
        this.element = element
        this.next = null
    }
}

class LinkNodeList {
    private head: any
    private length: number
    constructor() {
        this.head = null
        this.length = 0
    }
    append<T>(ele: T) {
        let node = new NodeHead(ele)
        let current
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            this.length += 1
        }
    }

    toString() {
        let current = this.head
        let res = ''
        while (current) {
            res = res + current.element
            current = current.next
        }
        return res
    }

}

let linknode = new LinkNodeList()
linknode.append('hello')
linknode.append('world')
console.log(linknode.toString())
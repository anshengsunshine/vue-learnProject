const app = new Vue({
    el: "#app",
    data: {
        books: [{
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.0,
                count: 1
            },
            {
                id: 2,
                name: "《UNIX编程艺术》",
                date: "2006-2",
                price: 59.0,
                count: 1
            },
            {
                id: 3,
                name: "《编程珠玑》",
                date: "2008-10",
                price: 39.0,
                count: 1
            },
            {
                id: 4,
                name: "《代码大全》",
                date: "2006-3",
                price: 128.0,
                count: 1
            }
        ]
    },
    methods: {
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        removeHandle(index) {
            console.log(this);
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }

            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }

            // for (let item of this.books) {
            //     console.log(item)
            //     totalPrice += item.price * item.count;
            // }

            // return this.books.reduce(function(preValue, book) {
            //     return preValue + book.price * book.count;
            // }, 0);
            return this.books.reduce((pre, book) => pre + book.price * book.count, 0);
        }
    },
    filters: {
        showPrice(price) {
            return "￥" + price.toFixed(2);
        }
    }
});
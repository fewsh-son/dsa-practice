# Giới thiệu về Big O Notation

Big O Notation là một cách để mô tả độ phức tạp của thuật toán, đặc biệt là về thời gian(time complexcity) và không gian(space complexity) mà thuật toán yêu cầu khi kích thước đầu vào tăng lên. Đây là một công cụ quan trọng trong khoa học máy tính để đánh giá hiệu suất của các thuật toán.

## Các loại độ phức tạp phổ biến

1. **O(1) - Hằng số**: Thời gian thực hiện không thay đổi khi kích thước đầu vào tăng lên.
2. **O(log n) - Logarit**: Thời gian thực hiện tăng theo logarit của kích thước đầu vào.
3. **O(n) - Tuyến tính**: Thời gian thực hiện tăng tuyến tính với kích thước đầu vào.
4. **O(n log n)**: Thời gian thực hiện tăng theo n log n của kích thước đầu vào.
5. **O(n^2) - Bình phương**: Thời gian thực hiện tăng theo bình phương của kích thước đầu vào.
6. **O(2^n) - Hàm mũ**: Thời gian thực hiện tăng theo hàm mũ của kích thước đầu vào.
7. **O(n!) - Giai thừa**: Thời gian thực hiện tăng theo giai thừa của kích thước đầu vào.

## Ví dụ

- **O(1)**: Truy cập một phần tử trong mảng.
- **O(log n)**: Tìm kiếm nhị phân.
- **O(n)**: Duyệt qua tất cả các phần tử trong mảng.
- **O(n log n)**: Thuật toán sắp xếp nhanh (Quick Sort).
- **O(n^2)**: Sắp xếp nổi bọt (Bubble Sort).
- **O(2^n)**: Giải bài toán tháp Hà Nội.
- **O(n!)**: Sắp xếp tất cả các hoán vị của một tập hợp.

Big O Notation giúp các nhà phát triển hiểu rõ hơn về hiệu suất của các thuật toán và lựa chọn giải pháp tối ưu cho các vấn đề cụ thể.

Tại sao không dùng time: vì máy tính khác nhau sẽ cho thời gian khác nhau, thời điểm đo khác nhau kết quả sẽ khác nhau

<counting operation>

> 5n + any is n

<Big o shorthane importan> (time complexity)

1. Các phép toán học là không đổi: Dù cộng trừ chia: 2 + 2 cũng bằng 2000000000 + 20000000
2. Gán biến là không đổi: Gán a = 2 với gán a = 2000000000000 cũng mất thời gian như nhau
3. Truy cập 1 phần tử trong mảng (với index) hoặc trong object(với key ) là không đổi.
4. Trong vòng lặp. độ phức tạp(complexity) là độ dài của số lần lặp.

<Space complexity> in JS:

1. Most primitives (boolean, number, undefined, null) are constant space. (cùng chiếm một không gian)
2. String is O(n) space: một chuỗi dài 50 kí tự sẽ gấp 50 lần 1 chuỗi 1 kí tự
3. Array (n is the length of array) và Object (n is the number of keys object) cũng là O(n).

<Working with object & Array>

<OBJECT>
    when to use object: 
        1. when you don't need order
        2. when you need fast access, insert or remove

    Big O of Object:
        1. Insertion - O(1)
        2. Remove - O(1)
        3. Searching - O(n)
        4. Access - O(1)
    Big O of method Object:
        1. Object.keys - O(n)
        2. Object.values - O(n)
        3. Object.entries - O(n)
        4. hasOwnProperty - O(1)

<ARRAY>
    when to use array: 
       1. when you need order

    Big O of Array:
        1. Insertion - It depends
        2. Remove - It depends
        3. Searching - O(n)
        4. Access - O(1)
    Big O of method Array:
        1. push() - O(1)
        1. pop() - O(1)
        1. shift() - O(n)
        1. unshift() - O(n)
        1. concat() - O(n)
        1. slice() - O(n)
        1. splice() - O(n)
        1. short() - O(n*logn)
        1. forEach/map/filter/reduce/() - O(n)

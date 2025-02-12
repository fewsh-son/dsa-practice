# Frequency Counter Pattern là gì?

    - Frequency Counter Pattern là một kỹ thuật tối ưu giúp giảm độ phức tạp từ O(n²) xuống O(n) bằng cách sử dụng object (hoặc Map) để đếm tần suất xuất hiện của các phần tử trong một tập dữ liệu.

    - Thay vì dùng vòng lặp lồng nhau (nested loops) để so sánh từng phần tử, ta có thể sử dụng một cấu trúc dữ liệu như object để lưu trữ số lần xuất hiện của từng giá trị, giúp kiểm tra nhanh hơn.

#   Khi nào sử dụng Frequency Counter?

    - Kiểm tra xem hai chuỗi có phải là anagram của nhau không.
    - So sánh tần suất xuất hiện của các phần tử trong hai mảng.
    - Kiểm tra xem một chuỗi có chứa các ký tự trong một chuỗi khác không.
    - Tìm số xuất hiện nhiều nhất trong một danh sách.
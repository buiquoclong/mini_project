import { useState, useEffect } from "react";

// Chức năng của hook useLocalStorage là lưu trữ và truy xuất dữ liệu từ localStorage của trình duyệt. Nó nhận vào một key và một giá trị khởi tạo, và trả về một mảng gồm giá trị hiện tại và một hàm để cập nhật giá trị đó. Khi giá trị thay đổi, nó sẽ tự động lưu trữ giá trị mới vào localStorage.
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

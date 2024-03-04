import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([
    { name: "전체", isActive: true },
  ]);

  const setActive = () => {
    const params = new URLSearchParams(decodeURIComponent(location.search));
    if (params.get("category")) {
      setCategories((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.name === params.get("category"),
          };
        });
      });
    } else {
      setCategories((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.name === "전체",
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((names) => {
      if (names.length > 0) {
        let categoriesWithAll: Category[] = [...categories];
        names.forEach((name) => {
          categoriesWithAll.push({ name: name });
        });
        setCategories(categoriesWithAll);
        setActive();
      }
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { categories };
};

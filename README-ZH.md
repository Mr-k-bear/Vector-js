# Vector-js
 一个用于javascript的超小型向量库 😊

## 描述
该库支持2-4维向量的加法、减法、乘除、点乘、交叉乘法。

## 向量创建

使用 ```Vector()``` 创建一个自动识别维度数的向量。
这将会返回实例化好的向量。

```javascript
let vec2 = L.Vector(1);		// Vec2(1, 1)
let vec3 = L.Vector(1,2,3);	// Vec3(1, 2, 3)
let vec4 = L.Vector(1,2,3,4);	// Vec4(1, 2, 3, 4)
```

当然你也可以使用 ```new``` 手动创建。
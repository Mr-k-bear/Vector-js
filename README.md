# Vector-js
 A super mini vector library for javascript 😊

## 中文版
[中文版](https://github.com/Mr-k-bear/Vector-js/blob/main/README-ZH.md)

## Description
This library supports the addition, subtraction, multiplication and division, dot multiplication, cross multiplication of 2-4 dimensional vectors.

## Create a Vector

Use ```vector ()``` to create a vector that automatically identifies the number of dimensions.
This will return the instantiated vector.

```javascript
let vec2 = Vector(1);		// Vec2(1, 1)
let vec3 = Vector(1,2,3);	// Vec3(1, 2, 3)
let vec4 = Vector(1,2,3,4);	// Vec4(1, 2, 3, 4)
```

Of course, you can also use ```new``` to create it manually.

```javascript
let vec2 = new Vector.Vec2(1);	// Vec2(1, 1)
let vec3 = new Vector.Vec3(1);	// Vec3(1, 0, 0)
let vec4 = new Vector.Vec4(1,2);// Vec4(1, 2, 0, 0)
```
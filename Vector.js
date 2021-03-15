(()=> {
    /*
    * 自动识别向量
    * */
    const Vector = function () {

        let data = [];
        for (let argument of arguments) {

            if (typeof argument === "number") data.push(argument);
            else if (typeof argument === "object" && argument.constructor === Array)
                data = data.concat(argument);
            else if (typeof argument === "object" && argument.data.constructor === Array)
                data = data.concat(argument.data);

            if (data.length >= 4) break;
        }

        // 排除单一向量
        if (data.length === 1) data.push(data[0]);

        // 构建向量
        if (data.length === 2) return new Vec2(data);
        if (data.length === 3) return new Vec3(data);
        if (data.length === 4) return new Vec4(data);

        if (data.length > 4) return new Vec4(data.slice(0, 4));
    };

    /*
    * 赋值指令
    * */
    Vector._ = function(v, d){
        for (let i = 0; i < v.length; i++){
            v[i] = d[i];
        }
        return v;
    }

    /*
    * 打印向量
    * */
    Vector.toString = function (v1) {
        let res = "(";
        for (let i = 0; i < v1.length; i++) {
            res += v1[i] + ((v1.length === i+1) ? "" : ", ");
        }
        return res + ")";
    }

    /*
    * 归一化
    * */
    Vector.normal = function(v){
        let dis = 0;
        for (let i = 0; i < v.length; i++) {
            dis += v[i]**2;
        }
        return v.mult(dis**(-1/2));
    };

    /*
    * 长度
    * */
    Vector.len = function(v){
        let dis = 0;
        for (let i = 0; i < v.length; i++) {
            dis += v[i]**2;
        }
        return dis**(1/2);
    };

    /*
    * 绝对值
    * */
    Vector.abs = function(v){
        let res = [];
        for (let i = 0; i < v.length; i++) {
            res.push(Math.abs(v[i]));
        }
        return Vector(res);
    };

    /*
    * 向量最大值
    * */
    Vector.max = function (v1, v2) {
        if (typeof v1 === "number") v1 = Vector(new Array(v2.length).fill(v1));
        if (typeof v2 === "number") v2 = Vector(new Array(v1.length).fill(v2));
        if (v1.length !== v2.length) throw new Error('向量最大值: 两个向量长度不同');
        let res = [];
        for (let i = 0; i < v1.length; i++) {
            res.push(v1[i] > v2[i] ? v1[i] : v2[i]);
        }
        return Vector(res);
    }

    /*
    * 向量最小值
    * */
    Vector.min = function (v1, v2) {
        if (typeof v1 === "number") v1 = Vector(new Array(v2.length).fill(v1));
        if (typeof v2 === "number") v2 = Vector(new Array(v1.length).fill(v2));
        if (v1.length !== v2.length) throw new Error('向量最小值: 两个向量长度不同');
        let res = [];
        for (let i = 0; i < v1.length; i++) {
            res.push(v1[i] > v2[i] ? v2[i] : v1[i]);
        }
        return Vector(res);
    }

    /*
    * 向量加法
    * */
    Vector.add = function (v1, v2) {
        if (typeof v1 === "number") v1 = Vector(new Array(v2.length).fill(v1));
        if (typeof v2 === "number") v2 = Vector(new Array(v1.length).fill(v2));
        if (v1.length !== v2.length) throw new Error('向量加法: 两个向量长度不同');
        let res = [];
        for (let i = 0; i < v1.length; i++) {
            res.push(v1[i] / 1 + v2[i] / 1);
        }
        return Vector(res);
    }

    /*
    * 向量减法
    * */
    Vector.sub = function (v1, v2) {
        if (typeof v1 === "number") v1 = Vector(new Array(v2.length).fill(v1));
        if (typeof v2 === "number") v2 = Vector(new Array(v1.length).fill(v2));
        if (v1.length !== v2.length) throw new Error('向量减法: 两个向量长度不同');
        let res = [];
        for (let i = 0; i < v1.length; i++) {
            res.push(v1[i] / 1 - v2[i] / 1);
        }
        return Vector(res);
    }

    /*
    * 向量数乘
    * */
    Vector.mult = function (v1, v2) {
        if (typeof v1 === "number") v1 = Vector(new Array(v2.length).fill(v1));
        if (typeof v2 === "number") v2 = Vector(new Array(v1.length).fill(v2));
        if (v1.length !== v2.length) throw new Error('向量乘: 两个向量长度不同');
        let res = [];
        for (let i = 0; i < v1.length; i++) {
            res.push((v1[i] / 1) * (v2[i] / 1));
        }
        return Vector(res);
    }

    /*
    * 向量点乘
    * */
    Vector.dot = function (v1, v2) {
        if (typeof v1 === "number") v1 = Vector(new Array(v2.length).fill(v1));
        if (typeof v2 === "number") v2 = Vector(new Array(v1.length).fill(v2));
        if (v1.length !== v2.length) throw new Error('向量点乘: 两个向量长度不同');
        let res = 0;
        for (let i = 0; i < v1.length; i++) {
            res += ((v1[i] / 1) * (v2[i] / 1));
        }
        return res;
    }

    /*
    * 向量×乘
    * */
    Vector.cross = function (v1, v2) {
        if (v1.length !== v2.length) throw new Error('向量叉乘: 两个向量长度不同');

        // 2D
        if (v1.length === 2) return v1.x*v2.y - v2.x*v1.y;

        // 3D
        if (v1.length === 3) return new Vec3(
            v1.y*v2.z - v2.y*v1.z,
            v2.x*v1.z - v1.x*v2.z,
            v1.x*v2.y - v2.x*v1.y
        );

        if (v1.length === 4) throw new Error('向量叉乘: 不支持四维向量');
    }

    /*
    * 向量
    * */
    const Vec2 = function (x = 0, y = 0) {
        this.data = typeof x === "object" ? x : [x, y];
    }

    const Vec3 = function (x = 0, y = 0, z = 0) {
        this.data = typeof x === "object" ? x : [x, y, z];
    }

    const Vec4 = function (x = 0, y = 0, z = 0, w = 0) {
        this.data = typeof x === "object" ? x : [x, y, z, w];
    };

    /*
    * 原型属性
    * */
    const VecPrototype = Vec2.prototype = Vec3.prototype = Vec4.prototype = {
        length: 0,
        _: function (d) { return Vector._(this, d)},
        toString: function () { return Vector.toString(this)},
        normal: function () { return Vector.normal(this)},
        len: function () { return Vector.len(this)},
        abs: function () { return Vector.abs(this)},
        max: function (v2) { return Vector.max(this, v2)},
        min: function (v2) { return Vector.min(this, v2)},
        add: function (v2) { return Vector.add(this, v2)},
        sub: function (v2) { return Vector.sub(this, v2)},
        mult: function (v2) { return Vector.mult(this, v2)},
        dot: function (v2) { return Vector.dot(this, v2)},
        cross: function (v2) { return Vector.cross(this, v2)},
    }

    /*
    * 设置长度虚拟属性
    * */
    Object.defineProperty(VecPrototype, "length", {
        get: function () {
            return this.data.length
        },
    });

    /*
    * 设置数组索引虚拟属性
    * 方便当作数组访问
    * */
    const CODE = ['x', 'y', 'z', 'w'];
    for (let i = 0; i < 4; i++) {
        Object.defineProperty(VecPrototype, i + '', {
            get: function () {
                return this.data[i]
            },
            set: function (val) {
                this.data[i] = val
            },
        });
        Object.defineProperty(VecPrototype, CODE[i], {
            get: function () {
                return this.data[i]
            },
            set: function (val) {
                this.data[i] = val
            },
        });
    }

    /*
    * 添加到全局对象
    * */
    if (!window.Vector) window.Vector = Vector;
    if (!window.Vector.Vec2) window.Vector.Vec2 = Vec2;
    if (!window.Vector.Vec3) window.Vector.Vec3 = Vec3;
    if (!window.Vector.Vec4) window.Vector.Vec4 = Vec4;
})();
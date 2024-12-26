import { App } from 'vue';
export { default as DraggableContainer } from './components/DraggableContainer';
declare const _default: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        }> & Pick<Readonly<{
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "style" | "key" | "ref" | "class" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted">;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        } & {}>, {
            handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
            resizeHandleDown: (e: MouseEvent, handleType: import("./components/types").ResizingHandle) => void;
            setWidth(val: number): number;
            setHeight(val: number): number;
            setTop(val: number): number;
            setLeft(val: number): number;
            minWidth: import("vue").ComputedRef<number>;
            minHeight: import("vue").ComputedRef<number>;
            maxWidth: import("vue").ComputedRef<number>;
            maxHeight: import("vue").ComputedRef<number>;
            minLeft: import("vue").ComputedRef<number>;
            minTop: import("vue").ComputedRef<number>;
            maxLeft: import("vue").ComputedRef<number>;
            maxTop: import("vue").ComputedRef<number>;
            parentWidth: import("vue").Ref<number>;
            parentHeight: import("vue").Ref<number>;
            id: string;
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            top: import("vue").Ref<number>;
            left: import("vue").Ref<number>;
            enable: import("vue").Ref<boolean>;
            dragging: import("vue").Ref<boolean>;
            resizing: import("vue").Ref<boolean>;
            resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
            resizingMaxHeight: import("vue").Ref<number>;
            resizingMaxWidth: import("vue").Ref<number>;
            resizingMinWidth: import("vue").Ref<number>;
            resizingMinHeight: import("vue").Ref<number>;
            aspectRatio: import("vue").ComputedRef<number>;
            scale: import("vue").Ref<number>;
            setEnable: (value: boolean) => boolean;
            setDragging: (value: boolean) => boolean;
            setResizing: (value: boolean) => boolean;
            setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
            setResizingMaxHeight: (value: number) => number;
            setResizingMaxWidth: (value: number) => number;
            setResizingMinWidth: (value: number) => number;
            setResizingMinHeight: (value: number) => number;
            $setWidth: (val: number) => number;
            $setHeight: (val: number) => number;
            $setTop: (val: number) => number;
            $setLeft: (val: number) => number;
            setScale: (value: number) => number;
            containerRef: import("vue").Ref<HTMLElement>;
            containerProvider: import("./components/types").ContainerProvider;
        }, unknown, {
            style(): {
                [propName: string]: string;
            };
            klass(): {
                [propName: string]: string | boolean;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        }>;
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: TimerHandler, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        active: boolean;
        x: number;
        y: number;
        w: number;
        h: number;
        draggable: boolean;
        resizable: boolean;
        initW: number;
        initH: number;
        disabledX: boolean;
        disabledY: boolean;
        disabledW: boolean;
        disabledH: boolean;
        minW: number;
        minH: number;
        parent: boolean;
        handles: unknown[];
        classNameDraggable: string;
        classNameResizable: string;
        classNameDragging: string;
        classNameResizing: string;
        classNameActive: string;
        classNameHandle: string;
        lockAspectRatio: boolean;
        scale: number;
    } & {}> & import("vue").ShallowUnwrapRef<{
        handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
        resizeHandleDown: (e: MouseEvent, handleType: import("./components/types").ResizingHandle) => void;
        setWidth(val: number): number;
        setHeight(val: number): number;
        setTop(val: number): number;
        setLeft(val: number): number;
        minWidth: import("vue").ComputedRef<number>;
        minHeight: import("vue").ComputedRef<number>;
        maxWidth: import("vue").ComputedRef<number>;
        maxHeight: import("vue").ComputedRef<number>;
        minLeft: import("vue").ComputedRef<number>;
        minTop: import("vue").ComputedRef<number>;
        maxLeft: import("vue").ComputedRef<number>;
        maxTop: import("vue").ComputedRef<number>;
        parentWidth: import("vue").Ref<number>;
        parentHeight: import("vue").Ref<number>;
        id: string;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        top: import("vue").Ref<number>;
        left: import("vue").Ref<number>;
        enable: import("vue").Ref<boolean>;
        dragging: import("vue").Ref<boolean>;
        resizing: import("vue").Ref<boolean>;
        resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
        resizingMaxHeight: import("vue").Ref<number>;
        resizingMaxWidth: import("vue").Ref<number>;
        resizingMinWidth: import("vue").Ref<number>;
        resizingMinHeight: import("vue").Ref<number>;
        aspectRatio: import("vue").ComputedRef<number>;
        setEnable: (value: boolean) => boolean;
        setDragging: (value: boolean) => boolean;
        setResizing: (value: boolean) => boolean;
        setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
        setResizingMaxHeight: (value: number) => number;
        setResizingMaxWidth: (value: number) => number;
        setResizingMinWidth: (value: number) => number;
        setResizingMinHeight: (value: number) => number;
        $setWidth: (val: number) => number;
        $setHeight: (val: number) => number;
        $setTop: (val: number) => number;
        $setLeft: (val: number) => number;
        containerRef: import("vue").Ref<HTMLElement>;
        containerProvider: import("./components/types").ContainerProvider;
        scale: import("vue").Ref<number>;
        setScale: (value: number) => number;
    }> & {
        style: {
            [propName: string]: string;
        };
        klass: {
            [propName: string]: string | boolean;
        };
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    active: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    lockAspectRatio: boolean;
    scale: number;
} & {}>, {
    handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
    resizeHandleDown: (e: MouseEvent, handleType: import("./components/types").ResizingHandle) => void;
    setWidth(val: number): number;
    setHeight(val: number): number;
    setTop(val: number): number;
    setLeft(val: number): number;
    minWidth: import("vue").ComputedRef<number>;
    minHeight: import("vue").ComputedRef<number>;
    maxWidth: import("vue").ComputedRef<number>;
    maxHeight: import("vue").ComputedRef<number>;
    minLeft: import("vue").ComputedRef<number>;
    minTop: import("vue").ComputedRef<number>;
    maxLeft: import("vue").ComputedRef<number>;
    maxTop: import("vue").ComputedRef<number>;
    parentWidth: import("vue").Ref<number>;
    parentHeight: import("vue").Ref<number>;
    id: string;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    top: import("vue").Ref<number>;
    left: import("vue").Ref<number>;
    enable: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
    resizing: import("vue").Ref<boolean>;
    resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
    resizingMaxHeight: import("vue").Ref<number>;
    resizingMaxWidth: import("vue").Ref<number>;
    resizingMinWidth: import("vue").Ref<number>;
    resizingMinHeight: import("vue").Ref<number>;
    aspectRatio: import("vue").ComputedRef<number>;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
    setResizingMaxHeight: (value: number) => number;
    setResizingMaxWidth: (value: number) => number;
    setResizingMinWidth: (value: number) => number;
    setResizingMinHeight: (value: number) => number;
    $setWidth: (val: number) => number;
    $setHeight: (val: number) => number;
    $setTop: (val: number) => number;
    $setLeft: (val: number) => number;
    containerRef: import("vue").Ref<HTMLElement>;
    containerProvider: import("./components/types").ContainerProvider;
    scale: import("vue").Ref<number>;
    setScale: (value: number) => number;
}, unknown, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    active: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    lockAspectRatio: boolean;
    scale: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & {
    install?: (app: App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        }> & Pick<Readonly<{
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "style" | "key" | "ref" | "class" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted">;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        } & {}>, {
            handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
            resizeHandleDown: (e: MouseEvent, handleType: import("./components/types").ResizingHandle) => void;
            setWidth(val: number): number;
            setHeight(val: number): number;
            setTop(val: number): number;
            setLeft(val: number): number;
            minWidth: import("vue").ComputedRef<number>;
            minHeight: import("vue").ComputedRef<number>;
            maxWidth: import("vue").ComputedRef<number>;
            maxHeight: import("vue").ComputedRef<number>;
            minLeft: import("vue").ComputedRef<number>;
            minTop: import("vue").ComputedRef<number>;
            maxLeft: import("vue").ComputedRef<number>;
            maxTop: import("vue").ComputedRef<number>;
            parentWidth: import("vue").Ref<number>;
            parentHeight: import("vue").Ref<number>;
            id: string;
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            top: import("vue").Ref<number>;
            left: import("vue").Ref<number>;
            enable: import("vue").Ref<boolean>;
            dragging: import("vue").Ref<boolean>;
            resizing: import("vue").Ref<boolean>;
            resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
            resizingMaxHeight: import("vue").Ref<number>;
            resizingMaxWidth: import("vue").Ref<number>;
            resizingMinWidth: import("vue").Ref<number>;
            resizingMinHeight: import("vue").Ref<number>;
            aspectRatio: import("vue").ComputedRef<number>;
            setEnable: (value: boolean) => boolean;
            setDragging: (value: boolean) => boolean;
            setResizing: (value: boolean) => boolean;
            setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
            setResizingMaxHeight: (value: number) => number;
            setResizingMaxWidth: (value: number) => number;
            setResizingMinWidth: (value: number) => number;
            setResizingMinHeight: (value: number) => number;
            $setWidth: (val: number) => number;
            $setHeight: (val: number) => number;
            $setTop: (val: number) => number;
            $setLeft: (val: number) => number;
            setScale: (value: number) => number;
            scale: import("vue").Ref<number>;
            containerRef: import("vue").Ref<HTMLElement>;
            containerProvider: import("./components/types").ContainerProvider;
        }, unknown, {
            style(): {
                [propName: string]: string;
            };
            klass(): {
                [propName: string]: string | boolean;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            active: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            parent: boolean;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
            scale: number;
        }>;
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: TimerHandler, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        active: boolean;
        x: number;
        y: number;
        w: number;
        h: number;
        draggable: boolean;
        resizable: boolean;
        initW: number;
        initH: number;
        disabledX: boolean;
        disabledY: boolean;
        disabledW: boolean;
        disabledH: boolean;
        minW: number;
        minH: number;
        parent: boolean;
        handles: unknown[];
        classNameDraggable: string;
        classNameResizable: string;
        classNameDragging: string;
        classNameResizing: string;
        classNameActive: string;
        classNameHandle: string;
        lockAspectRatio: boolean;
        scale: number;
    } & {}> & import("vue").ShallowUnwrapRef<{
        handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
        resizeHandleDown: (e: MouseEvent, handleType: import("./components/types").ResizingHandle) => void;
        setWidth(val: number): number;
        setHeight(val: number): number;
        setTop(val: number): number;
        setLeft(val: number): number;
        minWidth: import("vue").ComputedRef<number>;
        minHeight: import("vue").ComputedRef<number>;
        maxWidth: import("vue").ComputedRef<number>;
        maxHeight: import("vue").ComputedRef<number>;
        minLeft: import("vue").ComputedRef<number>;
        minTop: import("vue").ComputedRef<number>;
        maxLeft: import("vue").ComputedRef<number>;
        maxTop: import("vue").ComputedRef<number>;
        parentWidth: import("vue").Ref<number>;
        parentHeight: import("vue").Ref<number>;
        id: string;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        top: import("vue").Ref<number>;
        left: import("vue").Ref<number>;
        enable: import("vue").Ref<boolean>;
        dragging: import("vue").Ref<boolean>;
        resizing: import("vue").Ref<boolean>;
        resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
        resizingMaxHeight: import("vue").Ref<number>;
        resizingMaxWidth: import("vue").Ref<number>;
        resizingMinWidth: import("vue").Ref<number>;
        resizingMinHeight: import("vue").Ref<number>;
        aspectRatio: import("vue").ComputedRef<number>;
        scale: import("vue").Ref<number>;
        setEnable: (value: boolean) => boolean;
        setDragging: (value: boolean) => boolean;
        setResizing: (value: boolean) => boolean;
        setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
        setResizingMaxHeight: (value: number) => number;
        setResizingMaxWidth: (value: number) => number;
        setResizingMinWidth: (value: number) => number;
        setResizingMinHeight: (value: number) => number;
        $setWidth: (val: number) => number;
        $setHeight: (val: number) => number;
        $setTop: (val: number) => number;
        $setLeft: (val: number) => number;
        setScale: (value: number) => number;
        containerRef: import("vue").Ref<HTMLElement>;
        containerProvider: import("./components/types").ContainerProvider;
    }> & {
        style: {
            [propName: string]: string;
        };
        klass: {
            [propName: string]: string | boolean;
        };
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    active: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    lockAspectRatio: boolean;
    scale: number;
} & {}>, {
    handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
    resizeHandleDown: (e: MouseEvent, handleType: import("./components/types").ResizingHandle) => void;
    setWidth(val: number): number;
    setHeight(val: number): number;
    setTop(val: number): number;
    setLeft(val: number): number;
    minWidth: import("vue").ComputedRef<number>;
    minHeight: import("vue").ComputedRef<number>;
    maxWidth: import("vue").ComputedRef<number>;
    maxHeight: import("vue").ComputedRef<number>;
    minLeft: import("vue").ComputedRef<number>;
    minTop: import("vue").ComputedRef<number>;
    maxLeft: import("vue").ComputedRef<number>;
    maxTop: import("vue").ComputedRef<number>;
    parentWidth: import("vue").Ref<number>;
    parentHeight: import("vue").Ref<number>;
    id: string;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    top: import("vue").Ref<number>;
    left: import("vue").Ref<number>;
    enable: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
    resizing: import("vue").Ref<boolean>;
    resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
    resizingMaxHeight: import("vue").Ref<number>;
    resizingMaxWidth: import("vue").Ref<number>;
    resizingMinWidth: import("vue").Ref<number>;
    resizingMinHeight: import("vue").Ref<number>;
    aspectRatio: import("vue").ComputedRef<number>;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
    setResizingMaxHeight: (value: number) => number;
    setResizingMaxWidth: (value: number) => number;
    setResizingMinWidth: (value: number) => number;
    setResizingMinHeight: (value: number) => number;
    setScale: (value: number) => number;
    $setWidth: (val: number) => number;
    $setHeight: (val: number) => number;
    $setTop: (val: number) => number;
    $setLeft: (val: number) => number;
    scale: import("vue").Ref<number>;
    setScale: (value: number) => number;
    containerRef: import("vue").Ref<HTMLElement>;
    containerProvider: import("./components/types").ContainerProvider;
}, unknown, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    active: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    lockAspectRatio: boolean;
    scale: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App<any>, ...options: any[]) => any;
});
export default _default;

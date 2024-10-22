import { PensamentoController } from "./controller/PensamentoController"

export const Routes = [
    {
        method: "get",
        route: "/pensamentos",
        controller: PensamentoController,
        action: "all"
    },
    , {
        method: "get",
        route: "/pensamentos/:id",
        controller: PensamentoController,
        action: "one"
    },
    {
        method: "post",
        route: "/pensamentos",
        controller: PensamentoController,
        action: "save"
    },
    {
        method: "delete",
        route: "/pensamentos/:id",
        controller: PensamentoController,
        action: "remove"
    }, {
        method: "put",
        route: "/pensamentos/:id",
        controller: PensamentoController,
        action: "update"
    }
]
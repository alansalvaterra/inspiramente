import { PensamentoController } from "./controller/PensamentoController"

export const Routes = [
    {
        method: "get",
        route: "/pensamentos",
        controller: PensamentoController,
        action: "all"
    },
    {
        method: "post",
        route: "/pensamentos",
        controller: PensamentoController,
        action: "save"
    }
]
// , {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one"
// }, {
//     method: "delete",
//     route: "/users/:id",
//     controller: UserController,
//     action: "remove"
// }, {
//     method: "put",
//     route: "/users/:id",
//     controller: UserController,
//     action: "update"
// }]
const express = require('express');
const router = express.Router();

router.get('/', produtorio);

function produtorio(req, res) {
    const m = parseInt(req.query.m);
    const n = parseInt(req.query.n);

    if (isNaN(m) || isNaN(n) || m <= 0 || n < m) {
        return res.status(400).json({
            error: 'Parâmetros inválidos. Use ?m={mais maior que zero}&n={maior ou igual a m}'
        });
    }

    const calc = req.query.mode === 'recursive' ? calcRecursive : calcIterative;
    const result = calc(m, n);

    return res.status(200).json({ result });
}

function calcRecursive(m, n) {
    return m === n ? m + 1 / m : calcRecursive(m + 1, n) * (m + 1 / m);
}

function calcIterative(m, n) {
    let result = 1;
    for (let i = m; i <= n; i++) {
        result *= i + 1 / i;
    }
    return result;
}

module.exports = router;

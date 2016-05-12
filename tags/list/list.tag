<list>

    <ul>
        <li each={ items.filter(whatShow) }>
            {title}
        </li>
    </ul>

    <script>
    this.items = opts.items;


    whatShow(item) {
        return !item.hidden;
    }
    </script>
</list>
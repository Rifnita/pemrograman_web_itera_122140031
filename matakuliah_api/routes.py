def includeme(config):
    config.add_route('get_all', '/matakuliah')
    config.add_route('create', '/matakuliah')
    config.add_route('update', '/matakuliah/{id}')
    config.add_route('delete', '/matakuliah/{id}')
    config.scan()
from setuptools import setup, find_packages

requires = [
    'pyramid',
    'SQLAlchemy',
    'waitress',
]

setup(
    name='matakuliah_api',
    version='0.1',
    packages=find_packages(), 
    include_package_data=True,
    install_requires=requires,
    entry_points={
        'paste.app_factory': [
            'main = matakuliah_api.___init___:main'
        ],
    },
)

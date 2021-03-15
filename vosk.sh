#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd ../vosk-api/python/example
#python3 stt-mh.py ${DIR}/rec-long.wav
python3 test_simple.py ${DIR}/knolle.wav
python3 test_simple.py ${DIR}/rec-long.wav